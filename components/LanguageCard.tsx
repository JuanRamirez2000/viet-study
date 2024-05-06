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
      <LanguageCardDialog cardInfo={cardInfo} />
      <CardDesciption onClick={handleCardFlip}>
        {faceShown === "front" ? cardInfo.frontText : cardInfo.backText}
      </CardDesciption>
    </Card>
  );
}

function LanguageCardDialog({
  cardInfo,
}: {
  cardInfo: typeof card.$inferInsert;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CardButton className="absolute top-1 right-1">
          <Edit2Icon className="size-8 p-2 bg-transparent" />
        </CardButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <h2>{cardInfo.frontText}</h2>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
