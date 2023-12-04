import { ReactNode } from "react";
import { TooltipContent } from "./styles";
import * as TooltipRadix from "@radix-ui/react-tooltip";

export interface TooltipProps {
  tooltipText?: string;
  children: ReactNode;
}

export const Tooltip = ({ tooltipText, children }: TooltipProps) => {
  return (
    <TooltipRadix.Provider>
      <TooltipRadix.Root defaultOpen>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Portal>
          <TooltipContent className="TooltipContent" sideOffset={5}>
            {tooltipText}
            <TooltipRadix.Arrow className="TooltipArrow" />
          </TooltipContent>
        </TooltipRadix.Portal>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};

Tooltip.displayName = "Tooltip";
