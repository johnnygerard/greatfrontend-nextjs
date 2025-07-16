"use client";
import { Button } from "@/component/button";
import { RiArrowDownSLine, RiCheckboxCircleFill } from "@remixicon/react";
import { clsx } from "clsx";
import { DropdownMenu } from "radix-ui";
import { memo, ReactNode, useState } from "react";

type Props = {
  className?: string;
  closeOnSelect?: boolean;
  defaultOpen?: boolean;
  defaultValue?: string;
  enabledAnimations?: boolean;
  label: string;
  onValueChange?: (value: string) => void;
  options: Array<{
    disabled?: boolean;
    icon?: ReactNode;
    id: string;
    label: string;
  }>;
  value?: string;
};

/**
 * Component to select a single option from a list based on Radix UI Dropdown Menu primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/dropdown-menu
 */
const component = memo(
  ({
    className,
    closeOnSelect = true,
    defaultOpen = false,
    defaultValue,
    enabledAnimations = true,
    label,
    onValueChange,
    options,
    value: controlledValue,
  }: Props) => {
    const [internalValue, setInternalValue] = useState<string | undefined>(
      defaultValue,
    );
    const isUncontrolled = controlledValue === undefined;
    const value = isUncontrolled ? internalValue : controlledValue;

    return (
      <DropdownMenu.Root defaultOpen={defaultOpen}>
        <DropdownMenu.Trigger asChild>
          <Button
            className={clsx("w-full select-none", className)}
            iconRight={<RiArrowDownSLine className="p-[0.10419rem]" />}
            variant={{ size: "sm", type: "secondary" }}
          >
            {label}
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className={clsx(
              "flex flex-col gap-2 rounded-lg bg-white p-2 shadow-lg",
              "w-(--radix-dropdown-menu-trigger-width)",
              // Collision-aware animations
              enabledAnimations && [
                "data-[side=top]:animate-(--animate-slide-up)",
                "data-[side=bottom]:animate-(--animate-slide-down)",
                "data-[side=left]:animate-(--animate-slide-left)",
                "data-[side=right]:animate-(--animate-slide-right)",
              ],
            )}
            sideOffset={4}
          >
            {options.map(({ disabled, icon, id, label }) => {
              const isSelected = id === value;

              return (
                <DropdownMenu.Item
                  className={clsx(
                    "flex items-center gap-3 rounded-sm p-2",
                    "transition-[background-color,outline-color]",
                    isSelected
                      ? "bg-gray-50"
                      : "not-[[data-disabled]]:hover:bg-neutral-50",
                    "outline -outline-offset-1 outline-transparent",
                    "focus-visible:outline-indigo-200",
                    disabled ? "text-neutral-400" : "text-neutral-900",
                  )}
                  disabled={disabled}
                  key={id}
                  onSelect={(event) => {
                    if (isSelected) return;
                    if (!closeOnSelect) event.preventDefault();
                    if (isUncontrolled) setInternalValue(id);
                    onValueChange?.(id);
                  }}
                >
                  {icon !== undefined && (
                    <span className="[&_img,&_svg]:h-auto [&_img,&_svg]:w-5 [&>*]:block">
                      {icon}
                    </span>
                  )}
                  <span className="flex-1 text-sm font-medium select-none">
                    {label}
                  </span>
                  <RiCheckboxCircleFill
                    aria-hidden
                    className={clsx(
                      "size-5 transition-opacity",
                      isSelected ? "opacity-100" : "opacity-0",
                    )}
                  />
                </DropdownMenu.Item>
              );
            })}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    );
  },
);

component.displayName = "DropdownMenu";
export { component as DropdownMenu };
