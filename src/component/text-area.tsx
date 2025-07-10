"use client";
import { clsx } from "clsx";
import { Label } from "radix-ui";
import {
  DetailedHTMLProps,
  memo,
  TextareaHTMLAttributes,
  useId,
  useRef,
  useState,
} from "react";

type TextAreaProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// @see https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#the-constraint-validation-api
const validityStateKeys = ["valueMissing", "tooShort"] as const;

type Props = Omit<
  TextAreaProps,
  "aria-describedby" | "aria-errormessage" | "aria-invalid" | "id" | "ref"
> & {
  defaultError?: string; // Used to render the solution
  label?: string;
  validationMessages?: Partial<
    Record<(typeof validityStateKeys)[number], string>
  >;
  validator?: (value: string) => string | undefined;
};

export const TextArea = memo(
  ({
    className,
    defaultError = "",
    label,
    maxLength,
    onBlur,
    onChange,
    validationMessages = {},
    validator,
    ...props
  }: Props) => {
    const [characterCount, setCharacterCount] = useState(() =>
      maxLength === undefined
        ? null
        : (props.defaultValue ?? props.value ?? "").toString().length,
    );
    const [error, setError] = useState(defaultError);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const id = useId();
    const errorId = `${id}-error`;
    const counterId = `${id}-counter`;

    const validate = () => {
      const textArea = textAreaRef.current;
      if (textArea === null) return;
      const customError = validator?.(textArea.value);

      if (customError) {
        textArea.setCustomValidity(customError);
        setError(customError);
        return;
      }

      textArea.setCustomValidity("");
      if (textArea.validity.valid) {
        setError("");
        return;
      }

      for (const key of validityStateKeys) {
        if (textArea.validity[key]) {
          textArea.setCustomValidity(validationMessages[key] ?? "");
          setError(textArea.validationMessage);
          return;
        }
      }
    };

    return (
      <div
        className={clsx("flex h-40 w-full flex-col gap-1.5 text-sm", className)}
      >
        {label && (
          <Label.Root
            className="w-fit font-medium text-neutral-700"
            htmlFor={id}
          >
            {label}
          </Label.Root>
        )}
        <textarea
          ref={textAreaRef}
          id={id}
          className={clsx(
            "resize-none rounded-lg bg-neutral-50 px-3.5 py-3 text-neutral-900",
            "flex-1 transition-[box-shadow,outline-color]",
            // Inside border
            "outline -outline-offset-1 outline-neutral-200",
            // Focused state
            "focus-visible:outline-transparent",
            error
              ? "outline-red-300 focus-visible:shadow-(--error-focus-ring)"
              : "focus-visible:shadow-(--focus-ring)",
            // Disabled state
            "disabled:cursor-not-allowed disabled:outline-neutral-100",
            "disabled:text-neutral-400 disabled:placeholder:text-neutral-400",
          )}
          aria-describedby={characterCount !== null ? counterId : undefined}
          aria-errormessage={error ? errorId : undefined}
          aria-invalid={Boolean(error)}
          onBlur={(event) => {
            onBlur?.(event);
            validate();
          }}
          onChange={(event) => {
            onChange?.(event);
            validate();
            if (maxLength !== undefined) {
              setCharacterCount(event.target.value.length);
            }
          }}
          maxLength={maxLength}
          {...props}
        />
        {error && (
          <p className="text-red-600" id={errorId} aria-live="assertive">
            {error}
          </p>
        )}
        {characterCount !== null && maxLength !== undefined && (
          <p
            className={clsx("self-end text-neutral-500", error && "sr-only")}
            id={counterId}
          >
            {`${characterCount}/${maxLength}`}
          </p>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
