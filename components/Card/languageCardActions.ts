"use server";

import { db } from "@/db";
import { card } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import {
  languageCardAddFormSchema,
  languageCardEditFormSchema,
  LanguageCardStatus,
} from "./LanguageCardTypes";

async function editLanguageCard(
  prevState: any,
  formData: FormData
): Promise<LanguageCardStatus> {
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

async function addCard(
  prevState: any,
  formData: FormData
): Promise<Omit<LanguageCardStatus, "cardID">> {
  const validatedFields = languageCardAddFormSchema.safeParse({
    frontText: formData.get("frontText"),
    backText: formData.get("backText"),
  });

  if (!validatedFields.success) {
    return {
      status: "Error",
      message: "Something went wrong adding the cards",
    };
  }

  await db.insert(card).values({
    frontText: validatedFields.data.frontText,
    backText: validatedFields.data.backText,
  });

  revalidatePath("/");
  return {
    status: "Success",
    message: "Added card",
  };
}

async function deleteCard(cardId: number): Promise<LanguageCardStatus> {
  if (!cardId) {
    return {
      status: "Error",
      message: "No ID was provided",
    };
  }

  await db.delete(card).where(eq(card.id, cardId)).returning();

  revalidatePath("/");
  return {
    status: "Success",
    message: "Deleted card",
  };
}

export { editLanguageCard, deleteCard, addCard };
