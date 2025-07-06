"use client";
import { clsx } from "clsx";
import { Tabs } from "radix-ui";
import { memo } from "react";

type Props = {
  activeLabel?: string;
  className?: string;
  tabs: Array<{
    label: string;
    content: string;
  }>;
  variant?: "standalone" | "inline";
};

export const TabMenu = memo(
  ({ activeLabel, className, variant = "standalone", ...props }: Props) => {
    const tabs = props.tabs.map((tab, index) => ({
      ...tab,
      id: `tab-${index}`,
    }));
    const defaultId = activeLabel
      ? (tabs.find((tab) => tab.label === activeLabel)?.id ?? tabs[0].id)
      : tabs[0].id;

    return (
      <Tabs.Root className={className} defaultValue={defaultId}>
        <Tabs.List
          className={clsx(
            "flex gap-2",
            variant === "inline"
              ? // Inside bottom border
                "shadow-[inset_0_-1px_var(--color-neutral-300)]"
              : "flex-wrap",
          )}
        >
          {tabs.map(({ id, label }) => (
            <Tabs.Trigger
              key={id}
              value={id}
              className={clsx(
                // Base style
                "font-medium text-neutral-600",
                "transition-[color,box-shadow,outline-color,background-color]",
                variant === "standalone"
                  ? [
                      "rounded px-4.5 py-2.5",
                      // Disabled
                      "disabled:cursor-not-allowed disabled:text-neutral-400",
                      // Hovered
                      "hover:not-disabled:data-[state=inactive]:bg-neutral-50",
                      // Focused
                      "outline-4 focus-visible:outline-ring-brand",
                      // Active
                      "inset-ring-[0.5px] inset-ring-transparent",
                      "data-[state=active]:inset-ring-neutral-200",
                      "data-[state=active]:text-neutral-900",
                      "data-[state=active]:bg-white",
                      "data-[state=active]:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]",
                    ]
                  : [
                      "px-2 pb-3",
                      "hocus:text-neutral-900",
                      "data-[state=active]:text-indigo-700",
                      "data-[state=active]:shadow-[inset_0_-1px_var(--color-indigo-600)]",
                      "data-[state=active]:hocus:text-indigo-800",
                      "data-[state=active]:hocus:shadow-[inset_0_-1px_var(--color-indigo-800)]",
                    ],
              )}
            >
              {label}
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {tabs.map(({ id, content }) => (
          <Tabs.Content className="mt-6" key={id} value={id}>
            <p className="font-medium text-black">{content}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    );
  },
);

TabMenu.displayName = "TabMenu";
