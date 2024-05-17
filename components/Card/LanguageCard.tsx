"use client";

import { Card, CardButton, CardDesciption } from "@/components/ui/Card";
import { Edit2Icon, StarIcon } from "lucide-react";
import { card } from "@/db/schema";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import { deleteCard, editLanguageCard } from "./languageCardActions";
import { useFormState } from "react-dom";
import { toast } from "sonner";
import {
  LanguageCardForm,
  LanguageCardStatus,
  languageCardEditFormSchema,
} from "./LanguageCardTypes";

type CardInfo = typeof card.$inferSelect;

export default function LanguageCard({ cardInfo }: { cardInfo: CardInfo }) {
  const [faceShown, setFaceShown] = useState<"front" | "back">("front");
  const handleCardFlip = () => {
    setFaceShown((prev) => (prev === "front" ? "back" : "front"));
  };
  return (
    <Card className="size-44" card={cardInfo}>
      <CardButton className="top-1.5 left-1.5">
        <StarIcon className="size-8 p-2 bg-transparent" />
      </CardButton>
      <LanguageCardEditDialog cardInfo={cardInfo} />
      <CardDesciption onClick={handleCardFlip}>
        {faceShown === "front" ? cardInfo.frontText : cardInfo.backText}
      </CardDesciption>
    </Card>
  );
}

const initalFormStatus: LanguageCardStatus = {
  status: "Success",
  message: "",
};

function LanguageCardEditDialog({ cardInfo }: { cardInfo: CardInfo }) {
  const [open, setOpen] = useState(false);
  const [formStatusState, formAction] = useFormState(
    editLanguageCard,
    initalFormStatus
  );
  const form = useForm<LanguageCardForm>({
    resolver: zodResolver(languageCardEditFormSchema),
    defaultValues: {
      frontText: cardInfo.frontText,
      backText: cardInfo.backText,
      cardId: cardInfo.id.toString(),
    },
  });

  const handleDelete = async () => {
    const { status, message } = await deleteCard(cardInfo.id);
    if (status === "Error") {
      toast.error(message);
    }
    if (message !== "" && status === "Success") {
      toast.success(message);
    }
  };

  useEffect(() => {
    if (formStatusState.status === "Error") {
      toast.error(formStatusState.message);
    }
    if (
      formStatusState.message !== "" &&
      formStatusState.status === "Success"
    ) {
      toast.success(formStatusState.message);
    }
  }, [formStatusState]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CardButton className="absolute top-1.5 right-1.5">
          <Edit2Icon className="size-8 p-2 bg-transparent" />
        </CardButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form
              action={formAction}
              onSubmit={() => setOpen(false)}
              className="space-y-4"
            >
              <FormField
                control={form.control}
                name="frontText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Front Text</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please put in your word or phrase"
                        className="text-lg font-semibold"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="backText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Back Text</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please put in your word or phrase"
                        className="text-lg font-semibold"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <input type="hidden" name="cardId" value={cardInfo.id} />
              <div className="space-x-2">
                <Button
                  type="submit"
                  className={`rounded-xl`}
                  variant={"success"}
                >
                  Submit
                </Button>
                <Button
                  type="button"
                  variant={"error"}
                  onClick={async () => {
                    await handleDelete();
                    setOpen(false);
                  }}
                  className="rounded-xl "
                >
                  Delete
                </Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
