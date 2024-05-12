"use client";

import { cn } from "@/lib/utils";
import { card } from "@/db/schema";
import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className: string;
  card?: typeof card.$inferSelect;
  sideShown?: "front" | "back";
}

interface CardButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {}

interface CardDesciption extends React.HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ sideShown, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative text-zinc-950", className)}
      {...props}
    />
  )
);

Card.displayName = "Card";

const CardButton = forwardRef<HTMLButtonElement, CardButtonProps>(
  ({ className, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "absolute z-10 hover:scale-110 duration-200 bg-zinc-200 rounded-xl",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
);

CardButton.displayName = "CardButton";

const CardDesciption = forwardRef<HTMLDivElement, CardDesciption>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border shadow flex items-center justify-center bg-zinc-50 cursor-pointer relative w-full h-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

CardDesciption.displayName = "CardDescription";

export { Card, CardButton, CardDesciption };
