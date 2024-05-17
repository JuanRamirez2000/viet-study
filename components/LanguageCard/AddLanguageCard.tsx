"use client";

import { PlusIcon } from "lucide-react";
import { Card, CardDesciption } from "../ui/Card";
import {
  Dialog,
  DialogHeader,
  DialogTrigger,
  DialogContent,
} from "../ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import { addCard } from "./languageCardActions";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/Button";
import {
  LanguageAddForm,
  LanguageCardStatus,
  languageCardAddFormSchema,
} from "./LanguageCardTypes";
import { toast } from "sonner";

const initialFormStatus: LanguageCardStatus = {
  status: "Success",
  message: "",
};

export default function AddCard() {
  const [open, setOpen] = useState(false);

  const form = useForm<LanguageAddForm>({
    resolver: zodResolver(languageCardAddFormSchema),
    defaultValues: {
      frontText: "I love you",
      backText: "Anh yêu em",
    },
  });
  const [formStatusState, formAction] = useFormState(
    addCard,
    initialFormStatus
  );

  useEffect(() => {
    if (formStatusState.status === "Error") {
      toast.error(formStatusState.message);
    }
    if (
      formStatusState.message !== "" &&
      formStatusState.status === "Success"
    ) {
      toast.success(formStatusState.message);
      setOpen(false);
    }
  }, [formStatusState]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="size-44 flex flex-col items-center justify-center">
          <CardDesciption>
            <PlusIcon className="size-12 " />
          </CardDesciption>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form action={formAction} className="space-y-4">
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
              <div className="space-x-2">
                <Button
                  type="submit"
                  className="rounded-xl"
                  variant={"success"}
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
