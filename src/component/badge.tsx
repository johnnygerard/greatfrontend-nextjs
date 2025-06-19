import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import { type HTMLAttributes, memo } from "react";

export const badgeStyle = cva(
  "flex items-center rounded-full text-center inset-ring",
  {
    variants: {
      size: {
        small: "px-1.5 py-0.5 text-xs",
        medium: "px-2 py-0.5 text-sm",
        large: "px-2.5 py-1 text-sm",
      },
      type: {
        neutral: "bg-gray-50 text-neutral-600 inset-ring-neutral-200",
        error: "bg-red-50 text-red-600 inset-ring-red-200",
        warning: "bg-amber-50 text-amber-700 inset-ring-amber-200",
        success: "bg-green-50 text-green-700 inset-ring-green-200",
        brand: "bg-indigo-50 text-indigo-700 inset-ring-indigo-200",
      },
    },
    defaultVariants: {
      size: "medium",
      type: "neutral",
    },
  },
);

type Props = HTMLAttributes<HTMLDivElement> & {
  variant?: VariantProps<typeof badgeStyle>;
};

export const Badge = memo(({ className, variant, ...props }: Props) => (
  <div className={clsx(badgeStyle(variant), className)} {...props} />
));

Badge.displayName = "Badge";
