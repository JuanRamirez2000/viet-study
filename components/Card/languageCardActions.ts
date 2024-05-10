"use server";

import { db } from "@/db";
import { card } from "@/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

const languageCardEditFormSchema = z.object({
  frontText: z.string(),
  backText: z.string(),
});

async function editLanguageCard(cardID: number, formData: FormData) {
  const validatedFields = languageCardEditFormSchema.safeParse({
    frontText: formData.get("frontText"),
    backText: formData.get("backText"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const updatedCardId = await db
    .update(card)
    .set({
      frontText: validatedFields.data.frontText,
      backText: validatedFields.data.backText,
    })
    .where(eq(card.id, cardID));
  console.log(updatedCardId);
}

export { editLanguageCard };
