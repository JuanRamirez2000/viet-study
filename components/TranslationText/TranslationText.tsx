import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function TranlationText({
  children,
  translationText,
}: {
  children: React.ReactNode;
  translationText: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent>{translationText}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
