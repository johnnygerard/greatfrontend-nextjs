import { clsx } from "clsx";
import { type HTMLAttributes, memo } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: {
    size?: "small" | "medium" | "large";
    type?: "neutral" | "error" | "warning" | "success" | "brand";
  };
};

export const Badge = memo(
  ({
    variant: { size = "medium", type = "neutral" } = {},
    className,
    ...props
  }: Props) => (
    <div
      className={clsx(
        // Base
        "flex items-center rounded-full text-center inset-ring",
        // Size
        {
          small: "px-1.5 py-0.5 text-xs",
          medium: "px-2 py-0.5 text-sm",
          large: "px-2.5 py-1 text-sm",
        }[size],
        // Type
        {
          neutral: "bg-gray-50 text-neutral-600 inset-ring-neutral-200",
          error: "bg-red-50 text-red-600 inset-ring-red-200",
          warning: "bg-amber-50 text-amber-700 inset-ring-amber-200",
          success: "bg-green-50 text-green-700 inset-ring-green-200",
          brand: "bg-indigo-50 text-indigo-700 inset-ring-indigo-200",
        }[type],
        className,
      )}
      {...props}
    />
  ),
);

Badge.displayName = "Badge";
