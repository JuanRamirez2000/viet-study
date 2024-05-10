"use server";

import { db } from "@/db";
import { card } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const languageCardEditFormSchema = z.object({
  cardId: z.string(),
  frontText: z.string(),
  backText: z.string(),
});

type LanguageCardActionsReturnType = {
  status: "Error" | "Success";
  message: string;
};

async function editLanguageCard(
  prevState: any,
  formData: FormData
): Promise<LanguageCardActionsReturnType> {
  const validatedFields = languageCardEditFormSchema.safeParse({
    frontText: formData.get("frontText"),
    backText: formData.get("backText"),
    cardId: formData.get("cardId"),
  });

  if (!validatedFields.success) {
    return {
      status: "Error",
      message: "An error occured validating the text",
    };
  }

  const updatedCard: { cardData: typeof card.$inferInsert }[] = await db
    .update(card)
    .set({
      frontText: validatedFields.data.frontText,
      backText: validatedFields.data.backText,
    })
    .where(eq(card.id, Number(validatedFields.data.cardId)))
    .returning({ cardData: card });

  if (!updatedCard[0].cardData) {
    return {
      status: "Error",
      message: "Card data was not entered correctly",
    };
  }
  revalidatePath("/");
  return {
    status: "Success",
    message: "Card changed",
  };
}

async function deleteCard(
  cardId: number
): Promise<LanguageCardActionsReturnType> {
  if (!cardId) {
    return {
      status: "Error",
      message: "No ID was provided",
    };
  }

  const deleteCard = await db
    .delete(card)
    .where(eq(card.id, cardId))
    .returning();

  revalidatePath("/");
  return {
    status: "Success",
    message: "Deleted card",
  };
}

export { editLanguageCard, deleteCard };
