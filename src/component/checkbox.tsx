import { IconCheckmark } from "@/component/svg/icon-checkmark";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { clsx } from "clsx";
import { Checkbox } from "radix-ui";
import { memo } from "react";

type Props = CheckboxProps;

/**
 * Checkbox component with [Radix UI Checkbox primitive]{@link https://www.radix-ui.com/primitives/docs/components/checkbox}.
 */
const AppCheckbox = memo(({ className, ...props }: Props) => (
  <div className="p-1">
    <Checkbox.Root
      className={clsx(
        "group relative block size-4 rounded-sm border",
        "transition-[border-color,background-color,box-shadow]",
        "focus-visible:shadow-(--focus-ring)",
        props.disabled
          ? [
              "cursor-not-allowed border-transparent bg-neutral-200",
              "data-[state=unchecked]:border-neutral-300",
            ]
          : [
              "border-transparent bg-indigo-600",
              "data-[state=unchecked]:border-neutral-300",
              "data-[state=unchecked]:bg-white",
              "data-[state=unchecked]:focus-visible:border-indigo-600",
            ],
        className,
      )}
      {...props}
    >
      <Checkbox.Indicator aria-hidden forceMount>
        <IconCheckmark
          className={clsx(
            "absolute top-0.75 left-0.75 h-1.75 w-2.25 fill-white transition-opacity",
            "opacity-0 group-data-[state=checked]:opacity-100",
          )}
        />
        {/* Dash Icon */}
        <span
          className={clsx(
            "h-0.5 rounded-full bg-white transition-opacity",
            "absolute top-1/2 right-0.5 left-0.5 -translate-y-1/2",
            "opacity-0 group-data-[state=indeterminate]:opacity-100",
          )}
        />
      </Checkbox.Indicator>
    </Checkbox.Root>
  </div>
));

AppCheckbox.displayName = "Checkbox";
export { AppCheckbox as Checkbox };
