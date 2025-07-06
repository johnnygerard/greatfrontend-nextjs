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
};

export const TabMenu = memo(({ activeLabel, className, ...props }: Props) => {
  const tabs = props.tabs.map((tab, index) => ({ ...tab, id: `tab-${index}` }));
  const defaultId = activeLabel
    ? (tabs.find((tab) => tab.label === activeLabel)?.id ?? tabs[0].id)
    : tabs[0].id;

  return (
    <Tabs.Root className={className} defaultValue={defaultId}>
      <Tabs.List className="flex flex-wrap gap-2">
        {tabs.map(({ id, label }) => (
          <Tabs.Trigger
            key={id}
            value={id}
            className={clsx(
              "rounded px-4.5 py-2.5 font-medium transition-colors",
              "text-neutral-600 hover:bg-neutral-50",
              "inset-ring-[0.5px] inset-ring-transparent outline-4",
              // Active state
              "data-[state=active]:text-neutral-900",
              "data-[state=active]:bg-white",
              "data-[state=active]:inset-ring-neutral-200",
              "data-[state=active]:shadow-[0_1px_3px_rgba(0,0,0,0.1),0_1px_2px_-1px_rgba(0,0,0,0.1)]",
              // Focused state
              "focus-visible:outline-ring-brand",
              // Disabled state
              "disabled:cursor-not-allowed disabled:text-neutral-400",
              "disabled:bg-transparent",
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
});

TabMenu.displayName = "TabMenu";
