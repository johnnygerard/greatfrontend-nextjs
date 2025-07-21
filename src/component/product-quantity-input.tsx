"use client";
import { Tooltip } from "@/component/tooltip";
import { RiAddFill, RiSubtractFill } from "@remixicon/react";
import { clsx } from "clsx";
import { Label } from "radix-ui";
import { memo, useId, useRef } from "react";

type Props = {
  className?: string;
  onChange: (newValue: string) => void;
  stock: number;
  value: string;
};

/**
 * Controlled numeric input to select a product quantity.
 */
export const ProductQuantityInput = memo(
  ({ className, onChange, stock, value }: Props) => {
    const inputId = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const min = 1;
    const max = stock;

    const stepButton = (direction: "up" | "down") => {
      const Icon = direction === "up" ? RiAddFill : RiSubtractFill;
      const disabled =
        inputRef.current !== null &&
        (direction === "up"
          ? inputRef.current.valueAsNumber >= max
          : inputRef.current.valueAsNumber <= min);

      return (
        <button
          aria-disabled={disabled}
          aria-label={`${direction === "up" ? "Increase" : "Decrease"} quantity`}
          className={clsx(
            "aria-disabled:cursor-not-allowed aria-disabled:text-neutral-400",
            "absolute top-1/2 -translate-y-1/2",
            direction === "up" ? "right-1.5" : "left-1.5",
          )}
          onClick={() => {
            const input = inputRef.current;
            if (disabled || input === null) return;
            if (direction === "up") input.stepUp();
            else input.stepDown();
            onChange(input.value);
          }}
          tabIndex={-1}
          type="button"
        >
          <Icon
            aria-hidden
            className="size-5 p-[0.10419rem] text-inherit transition-[color]"
          />
        </button>
      );
    };

    return (
      <div>
        <Label.Root htmlFor={inputId}>Quantity</Label.Root>
        <div
          className={clsx(
            "group relative mt-4 text-neutral-600 transition-[box-shadow]",
            className,
          )}
        >
          {stepButton("down")}
          <input
            type="number"
            id={inputId}
            ref={inputRef}
            min={min}
            max={max}
            required
            step={1}
            value={value}
            onChange={(event) => {
              onChange(event.target.value);
            }}
            className={clsx(
              "w-31.25 rounded-md bg-neutral-50 px-12.5 py-2",
              "text-center text-sm font-medium text-inherit",
              "inset-ring inset-ring-neutral-200",
              "group-focus-within:valid:shadow-(--focus-ring)",
              "group-focus-within:invalid:shadow-(--error-focus-ring)",
              "invalid:inset-ring-red-300",
              // Hide the spin buttons in Webkit-based browsers
              "[&::-webkit-outer-spin-button]:hidden",
              "[&::-webkit-inner-spin-button]:hidden",
              // Hide the spin buttons in Firefox
              "[appearance:textfield]",
            )}
          />
          {inputRef.current && inputRef.current.valueAsNumber >= max ? (
            <Tooltip
              defaultOpen={true}
              delayDuration={0}
              label="Insufficient stock"
            >
              {stepButton("up")}
            </Tooltip>
          ) : (
            stepButton("up")
          )}
        </div>
      </div>
    );
  },
);

ProductQuantityInput.displayName = "ProductQuantityInput";
