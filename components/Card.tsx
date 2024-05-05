"use client";

import { cn } from "@/lib/utils";
import { card } from "@/db/schema";
import { useState } from "react";
import { Edit2Icon, StarIcon } from "lucide-react";

type CardProps = {
  className: string;
  card: typeof card.$inferSelect;
  sideShown?: "front" | "back";
};

export default function Card({
  className,
  card,
  sideShown = "front",
}: CardProps) {
  const [side, setSide] = useState(sideShown);

  const handleSideChange = () => {
    setSide((prev) => (prev === "front" ? "back" : "front"));
  };

  return (
    <div
      className={cn(
        "rounded-xl border shadow flex items-center justify-center bg-sky-100 text-sky-950 cursor-pointer relative",
        className
      )}
      onClick={handleSideChange}
    >
      <div className="absolute top-1 right-1 z-10 hover:scale-110 duration-200 hover:bg-sky-300 bg-zinc-50 rounded-xl">
        <Edit2Icon className="size-8 p-2 bg-transparent" />
      </div>
      <div className="absolute top-1 left-1 z-10 hover:scale-110 duration-200 hover:bg-sky-300 bg-zinc-50 rounded-xl">
        <StarIcon className="size-8 p-2 bg-transparent" />
      </div>
      <p className={`${side === "front" ? "block" : "hidden"}`}>
        {card.frontText}
      </p>
      <p className={`${side === "back" ? "block" : "hidden"}`}>
        {card.backText}
      </p>
    </div>
  );
}
