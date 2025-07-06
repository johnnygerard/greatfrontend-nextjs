import { clsx } from "clsx";
import { Tabs } from "radix-ui";
import { memo } from "react";

type Props = {
  className?: string;
  disabled?: boolean;
  label: string;
  value: string;
};

export const Tab = memo(({ className, disabled, label, value }: Props) => (
  <Tabs.Trigger
    className={clsx(
      "rounded px-4.5 py-2.5 font-medium transition-colors",
      "inset-ring-[0.5px] inset-ring-transparent outline-4",
      // Active state
      "data-[state=active]:text-neutral-900",
      "data-[state=active]:bg-white",
      "data-[state=active]:inset-ring-neutral-200",
      "data-[state=active]:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]",
      // Focused state
      "focus-visible:outline-ring-brand",
      // Disabled state
      disabled
        ? "cursor-not-allowed text-neutral-400"
        : "text-neutral-600 hover:bg-neutral-50",
      className,
    )}
    disabled={disabled}
    value={value}
  >
    {label}
  </Tabs.Trigger>
));

Tab.displayName = "Tab";
