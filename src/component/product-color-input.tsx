import { ProductColor } from "@/type/e-commerce-api/product-color";
import { RiCheckFill } from "@remixicon/react";
import { clsx } from "clsx";
import { Label, RadioGroup } from "radix-ui";
import { memo, useId } from "react";

const colorMap: Record<ProductColor, string> = {
  beige: "bg-amber-100",
  black: "bg-black",
  blue: "bg-blue-500",
  brown: "bg-amber-800",
  green: "bg-emerald-500",
  orange: "bg-orange-600",
  pink: "bg-pink-500",
  red: "bg-red-500",
  white: "bg-white",
  yellow: "bg-yellow-600",
};

type Props = {
  className?: string;
  colors: Array<{
    color: ProductColor;
    isOutOfStock?: boolean;
  }>;
  onValueChange: (value: ProductColor) => void;
  value: ProductColor;
};

/**
 * Product color selector based on the Radix UI Radio Group primitive.
 * @see https://www.radix-ui.com/primitives/docs/components/radio-group
 */
export const ProductColorInput = memo(
  ({ className, colors, onValueChange, value }: Props) => {
    const labelId = useId();

    if (colors.length === 0) {
      console.error("At least one color must be provided", { colors });
      return null;
    }

    return (
      <div className={className}>
        <Label.Root className="text-sm text-neutral-500" id={labelId}>
          Available Colors
        </Label.Root>
        <RadioGroup.Root
          aria-labelledby={labelId}
          className="mt-4 flex gap-4"
          onValueChange={onValueChange}
          orientation="horizontal"
          value={value}
        >
          {colors.map(({ color, isOutOfStock }) => {
            const colorLabel = color[0].toUpperCase() + color.slice(1);

            return (
              <div
                className={clsx(
                  "rounded-full border-[0.5625rem] border-transparent",
                  "transition-[border-color]",
                  "focus-within:border-(--color-ring-brand)",
                )}
                key={color}
              >
                <RadioGroup.Item
                  className={clsx(
                    "relative grid size-9.5 place-items-center rounded-full",
                    colorMap[color],
                    "transition-[border-color,outline-color]",
                    "border-2 border-transparent outline outline-transparent",
                    // Hovered state
                    "hover:border-indigo-200",
                    // Checked state
                    "data-[state=checked]:border-white",
                    "data-[state=checked]:outline-[#444CE7]",
                  )}
                  title={`${colorLabel}${isOutOfStock ? " (Out of Stock)" : ""}`}
                  value={color}
                >
                  {isOutOfStock ? (
                    <div
                      aria-hidden
                      className="absolute h-0.5 w-11.25 -rotate-45 bg-neutral-600"
                    />
                  ) : (
                    <RadioGroup.Indicator
                      asChild
                      className="absolute"
                      forceMount
                    >
                      <RiCheckFill
                        aria-hidden
                        className={clsx(
                          "size-7 text-white opacity-0 transition-opacity",
                          "data-[state=checked]:opacity-100",
                        )}
                      />
                    </RadioGroup.Indicator>
                  )}
                </RadioGroup.Item>
              </div>
            );
          })}
        </RadioGroup.Root>
      </div>
    );
  },
);

ProductColorInput.displayName = "ProductColorInput";
