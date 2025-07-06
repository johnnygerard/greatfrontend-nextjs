"use client";
import { clsx } from "clsx";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useId,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = InputProps & {
  icon?: ReactNode;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  label: string;
  variant?: {
    size?: "sm" | "md" | "lg" | "xl" | "2xl";
  };
};

export const RadioCard = memo(
  ({
    className,
    icon,
    iconLeft,
    iconRight,
    label,
    variant: { size = "md" } = {},
    ...props
  }: Props) => {
    const id = useId();
    const iconStyle = clsx(
      "[&_img,&_svg]:h-auto",
      size === "2xl" ? "[&_img,&_svg]:w-6" : "[&_img,&_svg]:w-5",
    );

    return (
      <>
        <input
          className={clsx(
            "sr-only",
            "[&:focus-visible+label]:bg-neutral-50",
            "[&:focus-visible+label]:text-neutral-950",
            "[&:focus-visible+label]:outline-ring-brand",
            "[&:checked+label]:inset-ring-indigo-600",
            "[&:disabled+label]:bg-neutral-100",
            "[&:disabled+label]:text-neutral-400",
            "[&:disabled+label]:cursor-not-allowed",
            "[&:disabled+label]:inset-ring-transparent",
          )}
          id={id}
          type="radio"
          {...props}
        />
        <label
          htmlFor={id}
          className={clsx(
            "flex items-center rounded bg-white font-medium text-neutral-900",
            "cursor-pointer inset-ring inset-ring-neutral-200 transition-colors",
            "hover:bg-neutral-50 hover:text-neutral-950",
            "outline-4 outline-transparent",
            {
              sm: "gap-1 px-3 py-2 text-sm",
              md: "gap-1 px-3.5 py-2.5 text-sm",
              lg: "gap-1.5 px-4 py-2.5 text-base",
              xl: "gap-1.5 px-5 py-3 text-base",
              "2xl": "gap-2.5 px-6 py-4 text-lg",
            }[size],
            className,
          )}
        >
          {icon ? (
            <>
              <span className={iconStyle}>{icon}</span>
              <span className="sr-only">{label}</span>
            </>
          ) : (
            <>
              {iconLeft && <span className={iconStyle}>{iconLeft}</span>}
              <span className="px-0.5">{label}</span>
              {iconRight && <span className={iconStyle}>{iconRight}</span>}
            </>
          )}
        </label>
      </>
    );
  },
);

RadioCard.displayName = "RadioCard";
