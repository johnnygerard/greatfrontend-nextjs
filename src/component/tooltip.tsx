import { TooltipProps } from "@radix-ui/react-tooltip";
import { clsx } from "clsx";
import { Tooltip as RadixTooltip } from "radix-ui";
import { memo, ReactNode } from "react";

type Props = TooltipProps & {
  children: ReactNode;
  className?: string;
  label: string;
};

/**
 * A tooltip component based on the Radix UI Tooltip primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/tooltip
 */
export const Tooltip = memo(
  ({ children, className, label, ...props }: Props) => {
    return (
      <RadixTooltip.Provider>
        <RadixTooltip.Root {...props}>
          <RadixTooltip.Trigger className={className} type="button">
            {children}
          </RadixTooltip.Trigger>
          <RadixTooltip.Portal>
            <RadixTooltip.Content
              arrowPadding={12}
              side="top"
              align="center"
              className={clsx(
                "rounded-lg bg-neutral-950 px-3 py-2 shadow-lg",
                "text-xs font-medium text-white",
              )}
            >
              <div>{label}</div>
              <RadixTooltip.Arrow asChild>
                <svg className="h-1.5 w-4 fill-neutral-950" viewBox="0 0 16 6">
                  <path d="M8.70703 5.26367C8.31654 5.65401 7.68346 5.65401 7.29297 5.26367L2.0293 0H13.9707L8.70703 5.26367Z" />
                </svg>
              </RadixTooltip.Arrow>
            </RadixTooltip.Content>
          </RadixTooltip.Portal>
        </RadixTooltip.Root>
      </RadixTooltip.Provider>
    );
  },
);

Tooltip.displayName = "Tooltip";
