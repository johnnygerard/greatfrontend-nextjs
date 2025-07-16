import { clsx } from "clsx";
import Link, { LinkProps } from "next/link";
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  memo,
  ReactNode,
} from "react";

type AnchorProps = DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>;

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type Props = (
  | ({ asLink: true; asNextLink?: false } & AnchorProps)
  | ({ asLink?: false; asNextLink: true } & LinkProps)
  | ({ asLink?: false; asNextLink?: false } & ButtonProps)
) & {
  children: ReactNode;
  className?: string;
  iconOnly?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  variant?: {
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
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
    asLink,
    asNextLink,
    children,
    className,
    iconOnly,
    iconLeft,
    iconRight,
    variant: { size = "md", type = "primary" } = {},
    ...props
  }: Props) => {
    const isLinkVariant = ["linkColor", "linkGray"].includes(type);
    const iconStyle = clsx(
      "[&_img,&_svg]:h-auto [&>*]:block",
      size === "2xl" ? "[&_img,&_svg]:w-6" : "[&_img,&_svg]:w-5",
    );

    const buttonStyle = clsx(
      // Base style
      [
        "flex items-center justify-center rounded font-medium",
        "transition-[background-color,color,outline-color,box-shadow]",
      ],
      // Disabled and type-specific style
      "disabled" in props && props.disabled
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
        : "outline-4 focus-visible:outline-ring-brand",
      // Shadow
      ["primary", "secondary"].includes(type) &&
        "not-disabled:not-focus-visible:shadow",
      // Padding
      isLinkVariant ||
        {
          sm: iconOnly ? "p-2" : "px-3 py-2",
          md: iconOnly ? "p-2.5" : "px-3.5 py-2.5",
          lg: iconOnly ? "p-3" : "px-4 py-2.5",
          xl: iconOnly ? "p-3.5" : "px-5 py-3",
          "2xl": iconOnly ? "p-4" : "px-6 py-4",
        }[size],
      // Gap and font size
      iconOnly ||
        {
          sm: "gap-1 text-sm",
          md: "gap-1 text-sm",
          lg: "gap-1.5 text-base",
          xl: "gap-1.5 text-base",
          "2xl": "gap-2.5 text-lg",
        }[size],
      className,
    );

    const content = iconOnly ? (
      <span className={iconStyle}>{children}</span>
    ) : (
      <>
        {iconLeft && <span className={iconStyle}>{iconLeft}</span>}
        <span className="flex-1 px-0.5 text-start">{children}</span>
        {iconRight && <span className={iconStyle}>{iconRight}</span>}
      </>
    );

    return asNextLink ? (
      <Link className={buttonStyle} {...(props as LinkProps)}>
        {content}
      </Link>
    ) : asLink ? (
      <a className={buttonStyle} {...(props as AnchorProps)}>
        {content}
      </a>
    ) : (
      <button className={buttonStyle} {...(props as ButtonProps)}>
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";
