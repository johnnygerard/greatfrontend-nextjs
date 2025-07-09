import { SwitchProps } from "@radix-ui/react-switch";
import { clsx } from "clsx";
import { Switch as RadixSwitch } from "radix-ui";
import { memo } from "react";

type Props = SwitchProps & {
  variant?: "sm" | "md";
};

/**
 * Switch component based on Radix UI Switch primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/switch
 */
export const Switch = memo(
  ({ className, disabled, variant = "md", ...props }: Props) => {
    return (
      <RadixSwitch.Root
        className={clsx(
          "group box-content rounded-full p-0.5",
          variant === "sm" ? "w-8" : "w-10", // Twice the thumb size
          "transition-[background-color,box-shadow,outline-color]",
          disabled
            ? "cursor-not-allowed bg-gray-100"
            : [
                // Background
                "data-[state=unchecked]:bg-gray-200",
                "data-[state=unchecked]:hocus:bg-gray-300",
                "data-[state=checked]:bg-indigo-700",
                "data-[state=checked]:hocus:bg-indigo-800",
                // Inside border
                "hocus:inset-ring",
                "data-[state=unchecked]:inset-ring-gray-400",
                "data-[state=checked]:inset-ring-indigo-600",
                // Focus ring
                "outline-4",
                "data-[state=unchecked]:hocus:outline-[rgba(157,164,174,0.2)]",
                "data-[state=checked]:hocus:outline-ring-brand",
              ],
          className,
        )}
        disabled={disabled}
        {...props}
      >
        <RadixSwitch.Thumb
          className={clsx(
            "block rounded-full transition-[margin-left,box-shadow,background-color]",
            "[--thumb-shadow:0_1px_3px_rgba(16,24,40,0.1),0_1px_2px_rgba(16,24,40,0.06)]",
            variant === "sm"
              ? "size-4 data-[state=checked]:ml-4"
              : "size-5 data-[state=checked]:ml-5",
            disabled
              ? "bg-gray-300"
              : [
                  "bg-white",
                  "data-[state=unchecked]:shadow-sm",
                  "data-[state=checked]:shadow-xs",
                  "group-hocus:data-[state=checked]:shadow-(--thumb-shadow)",
                  "group-hocus:data-[state=unchecked]:shadow-(--thumb-shadow)",
                ],
          )}
        />
      </RadixSwitch.Root>
    );
  },
);

Switch.displayName = "Switch";
