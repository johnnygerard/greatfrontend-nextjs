import { clsx } from "clsx";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  ReactNode,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = ButtonProps & {
  icon?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: {
    size?: "md" | "lg" | "xl" | "2xl";
    type?:
      | "primary"
      | "secondary"
      | "tertiary"
      | "linkColor"
      | "linkGray"
      | "destructive";
  };
};

export const Button = memo(
  ({
    children,
    className,
    disabled,
    icon,
    iconLeft,
    iconRight,
    variant: { size = "md", type = "primary" } = {},
    ...props
  }: Props) => {
    const iconOnly = icon !== undefined;
    const isLinkVariant = ["linkColor", "linkGray"].includes(type);
    const iconStyle = clsx(
      size === "2xl" ? "size-6 p-0.5" : "size-5 p-[0.10419rem]",
    );

    return (
      <button
        disabled={disabled}
        className={clsx(
          // Base style
          [
            "flex items-center justify-center rounded font-medium",
            "transition-[background-color,color,outline-color,box-shadow]",
          ],
          // Disabled and type-specific style
          disabled
            ? [
                "cursor-not-allowed text-neutral-400",
                isLinkVariant || "bg-neutral-100",
              ]
            : {
                primary: "bg-indigo-700 text-white hocus:bg-indigo-800",
                secondary: [
                  "bg-white text-neutral-900 inset-ring-[0.5px] inset-ring-neutral-200",
                  "hocus:bg-neutral-50 hocus:text-neutral-950 hocus:inset-ring",
                ],
                tertiary: "text-indigo-700 hocus:bg-neutral-50",
                linkColor: "text-indigo-700 hocus:text-indigo-800",
                linkGray: "text-neutral-600 hocus:text-neutral-900",
                destructive: "bg-red-600 text-white hocus:bg-red-700",
              }[type],
          // Focus ring
          type === "destructive"
            ? "focus-visible:[box-shadow:0_0_0_1px_#D92D20,0_0_0_4px_rgba(217,45,32,0.12)]"
            : "outline-4 focus-visible:outline-[rgba(68,76,231,0.12)]",
          // Shadow
          ["primary", "secondary"].includes(type) &&
            "not-disabled:not-focus-visible:shadow",
          // Padding
          isLinkVariant ||
            {
              md: iconOnly ? "p-2.5" : "px-3.5 py-2.5",
              lg: iconOnly ? "p-3" : "px-4 py-2.5",
              xl: iconOnly ? "p-3.5" : "px-5 py-3",
              "2xl": iconOnly ? "p-4" : "px-6 py-4",
            }[size],
          // Gap and font size
          iconOnly ||
            {
              md: "gap-1 text-sm",
              lg: "gap-1.5 text-base",
              xl: "gap-1.5 text-base",
              "2xl": "gap-2.5 text-lg",
            }[size],
          className,
        )}
        {...props}
      >
        {icon ? (
          <div className={iconStyle}>{icon}</div>
        ) : (
          <>
            {iconLeft && <div className={iconStyle}>{iconLeft}</div>}
            <span className="px-0.5">{children}</span>
            {iconRight && <div className={iconStyle}>{iconRight}</div>}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
