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

type Props = Omit<
  InputProps,
  "aria-describedby" | "aria-errormessage" | "aria-invalid" | "id"
> & {
  error?: string;
  hint?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconRightShowsError?: boolean;
  label?: string;
  // @see https://html.spec.whatwg.org/multipage/input.html
  type?: "email" | "password" | "search" | "tel" | "text" | "url";
};

export const TextInput = memo(
  ({
    className,
    error,
    hint,
    iconLeft,
    iconRight,
    iconRightShowsError,
    label,
    type = "text",
    ...props
  }: Props) => {
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const iconStyle = clsx(
      "absolute top-1/2 -translate-y-1/2 [&_img,&_svg]:h-auto",
    );

    return (
      <div className={clsx("flex w-full flex-col gap-1.5 text-sm", className)}>
        {label && (
          <label
            className="self-start font-medium text-neutral-700"
            htmlFor={inputId}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {iconLeft && (
            <span
              className={clsx(
                iconStyle,
                "left-3.5 text-neutral-400 [&_img,&_svg]:w-5",
              )}
            >
              {iconLeft}
            </span>
          )}
          <input
            className={clsx(
              "w-full min-w-0 rounded bg-neutral-50 py-2.5",
              iconLeft ? "pl-10.5" : "pl-3.5",
              iconRight ? "pr-9.5" : "pr-3.5",
              "text-neutral-900 placeholder:text-neutral-500",
              // `outline` is used as a border to match the "Inside" Figma design requirement
              // `inset-ring` is not used because it effectively disables the `box-shadow` transition
              "outline -outline-offset-1 outline-neutral-200",
              "transition-[box-shadow,outline-color]",
              // Focused state
              "focus-visible:outline-transparent",
              error
                ? "focus-visible:shadow-(--text-input-error-ring)"
                : "focus-visible:shadow-(--text-input-focus-ring)",
              // Disabled state
              "disabled:cursor-not-allowed disabled:outline-neutral-100",
              "disabled:placeholder:text-neutral-400",
            )}
            type={type}
            id={inputId}
            aria-describedby={hint ? hintId : undefined}
            aria-errormessage={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            {...props}
          />
          {iconRight && (
            <span
              className={clsx(
                iconStyle,
                iconRightShowsError && error
                  ? "text-red-600"
                  : "text-neutral-400",
                "right-3.5 [&_img,&_svg]:w-4",
              )}
            >
              {iconRight}
            </span>
          )}
        </div>
        {error && (
          <p className="text-red-600" id={errorId} aria-live="assertive">
            {error}
          </p>
        )}
        {hint && (
          <p
            className={clsx("text-neutral-500", error && "sr-only")}
            id={hintId}
          >
            {hint}
          </p>
        )}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";
