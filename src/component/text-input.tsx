import { DetailedHTMLProps, InputHTMLAttributes, memo } from "react";

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = Omit<InputProps, "type">;

export const TextInput = memo((props: Props) => {
  return <input type="text" {...props} />;
});

TextInput.displayName = "TextInput";
