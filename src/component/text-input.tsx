"use client";
import { clsx } from "clsx";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  ReactNode,
  useId,
  useRef,
  useState,
} from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
const validityStateKeys = [
  "valueMissing",
  "typeMismatch",
  "badInput",
  "tooShort",
  "tooLong",
  "patternMismatch",
] as const;

type Props = Omit<
  InputProps,
  "aria-describedby" | "aria-errormessage" | "aria-invalid" | "id"
> & {
  defaultError?: string; // Used to render the solution
  hint?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  iconRightShowsError?: boolean;
  label?: string;
  // @see https://html.spec.whatwg.org/multipage/input.html
  type?: "email" | "password" | "search" | "tel" | "text" | "url";
  validationMessages?: Partial<
    Record<(typeof validityStateKeys)[number], string>
  >;
  validator?: (value: string) => string | undefined;
};

export const TextInput = memo(
  ({
    className,
    defaultError = "",
    hint,
    iconLeft,
    iconRight,
    iconRightShowsError,
    label,
    onBlur,
    onChange,
    type = "text",
    validationMessages = {},
    validator,
    ...props
  }: Props) => {
    const [error, setError] = useState(defaultError);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const iconStyle = clsx(
      "absolute top-1/2 -translate-y-1/2 [&_img,&_svg]:h-auto [&>*]:block",
    );

    const validate = () => {
      const input = inputRef.current;
      if (input === null) return;
      const customError = validator?.(input.value);

      if (customError) {
        input.setCustomValidity(customError);
        setError(customError);
        return;
      }

      input.setCustomValidity("");
      if (input.validity.valid) {
        setError("");
        return;
      }

      for (const key of validityStateKeys) {
        if (input.validity[key]) {
          input.setCustomValidity(validationMessages[key] ?? "");
          setError(input.validationMessage);
          return;
        }
      }
    };

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
            ref={inputRef}
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
                ? "focus-visible:shadow-(--error-focus-ring)"
                : "focus-visible:shadow-[var(--focus-ring),0_1px_2px_rgba(16,24,40,0.05)]",
              // Disabled state
              "disabled:cursor-not-allowed disabled:outline-neutral-100",
              "disabled:text-neutral-400 disabled:placeholder:text-neutral-400",
            )}
            type={type}
            id={inputId}
            aria-describedby={hint ? hintId : undefined}
            aria-errormessage={error ? errorId : undefined}
            aria-invalid={Boolean(error)}
            onBlur={(event) => {
              onBlur?.(event);
              validate();
            }}
            onChange={(event) => {
              onChange?.(event);
              validate();
            }}
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
