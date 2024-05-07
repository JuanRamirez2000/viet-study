"use client";

import { Card, CardButton, CardDesciption } from "@/components/ui/Card";
import { Edit2Icon, StarIcon } from "lucide-react";
import { card } from "@/db/schema";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/Button";

export default function LanguageCard({
  cardInfo,
}: {
  cardInfo: typeof card.$inferSelect;
}) {
  const [faceShown, setFaceShown] = useState<"front" | "back">("front");
  const handleCardFlip = () => {
    setFaceShown((prev) => (prev === "front" ? "back" : "front"));
  };
  return (
    <Card className="size-44" card={cardInfo}>
      <CardButton className="top-1 left-1">
        <StarIcon className="size-8 p-2 bg-transparent" />
      </CardButton>
      <LanguageCardEditDialog cardInfo={cardInfo} />
      <CardDesciption onClick={handleCardFlip}>
        {faceShown === "front" ? cardInfo.frontText : cardInfo.backText}
      </CardDesciption>
    </Card>
  );
}

const languageCardEditFormSchema = z.object({
  frontText: z.string(),
  backText: z.string(),
});

function LanguageCardEditDialog({
  cardInfo,
}: {
  cardInfo: typeof card.$inferInsert;
}) {
  const form = useForm<z.infer<typeof languageCardEditFormSchema>>({
    resolver: zodResolver(languageCardEditFormSchema),
    defaultValues: {
      frontText: cardInfo.frontText,
      backText: cardInfo.backText,
    },
  });

  const onSubmit = (values: z.infer<typeof languageCardEditFormSchema>) => {
    console.log(values);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <CardButton className="absolute top-1 right-1">
          <Edit2Icon className="size-8 p-2 bg-transparent" />
        </CardButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="frontText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Front Text</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please put in your word or phrase"
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
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="rounded-xl">
                Submit
              </Button>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
