import { z } from "zod";

const languageCardEditFormSchema = z.object({
  cardId: z.string(),
  frontText: z.string(),
  backText: z.string(),
});
type LanguageCardForm = z.infer<typeof languageCardEditFormSchema>;

const languageCardAddFormSchema = z.object({
  frontText: z.string(),
  backText: z.string(),
});
type LanguageAddForm = z.infer<typeof languageCardAddFormSchema>;

type LanguageCardStatus = {
  status: "Error" | "Success";
  message: string;
};

export { languageCardEditFormSchema, languageCardAddFormSchema };
export type { LanguageCardStatus };
export type { LanguageAddForm, LanguageCardForm };
