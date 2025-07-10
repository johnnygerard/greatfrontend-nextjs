"use client";
import { IconCheckmark } from "@/component/svg/icon-checkmark";
import { CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox } from "radix-ui";
import { memo, useState } from "react";

type Props = CheckboxProps;

const AppCheckbox = memo(({ className, onCheckedChange, ...props }: Props) => {
  const [checked, setChecked] = useState<CheckedState>(
    () => props.defaultChecked ?? props.checked ?? false,
  );

  return (
    <div className="p-1">
      <Checkbox.Root
        className={clsx(
          "relative block size-4 rounded-sm border",
          "transition-[border-color,background-color,box-shadow]",
          "focus-visible:shadow-(--focus-ring)",
          props.disabled
            ? [
                "cursor-not-allowed bg-neutral-200",
                checked ? "border-transparent" : "border-neutral-300",
              ]
            : checked
              ? "border-transparent bg-indigo-600"
              : "border-neutral-300 bg-white focus-visible:border-indigo-600",
          className,
        )}
        onCheckedChange={(state) => {
          setChecked(state);
          onCheckedChange?.(state);
        }}
        {...props}
      >
        <Checkbox.Indicator aria-hidden forceMount>
          <IconCheckmark
            className={clsx(
              "absolute top-0.75 left-0.75 h-1.75 w-2.25 fill-white transition-opacity",
              checked === true ? "opacity-100" : "opacity-0",
            )}
          />
          {/* Dash Icon */}
          <div
            className={clsx(
              "h-0.5 rounded-full bg-white transition-opacity",
              "absolute top-1/2 right-0.5 left-0.5 -translate-y-1/2",
              checked === "indeterminate" ? "opacity-100" : "opacity-0",
            )}
          />
        </Checkbox.Indicator>
      </Checkbox.Root>
    </div>
  );
});

AppCheckbox.displayName = "Checkbox";
export { AppCheckbox as Checkbox };
