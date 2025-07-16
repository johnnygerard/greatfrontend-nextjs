import { memo } from "react";

type Props = {
  className?: string;
};

export const ModalDialog = memo(({ className }: Props) => {
  return <div className={className}>modal dialog component</div>;
});

ModalDialog.displayName = "ModalDialog";
