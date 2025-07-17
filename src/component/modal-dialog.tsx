"use client";
import { Button } from "@/component/button";
import { RiCloseFill } from "@remixicon/react";
import { memo, useRef } from "react";

type Props = {
  className?: string;
  title: string;
  message?: string;
};

export const ModalDialog = memo(({ className, title, message }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <div className={className}>
      {/*  Trigger*/}
      <Button
        onClick={() => {
          dialogRef.current?.showModal();
        }}
        variant={{
          type: "primary",
          size: "md",
        }}
      >
        Open modal
      </Button>

      <dialog className="rounded-lg bg-white p-6" ref={dialogRef}>
        <form method="dialog">
          <h2 className="relative text-lg font-semibold text-neutral-900">
            {/* Close button */}
            <Button
              className="absolute top-0 right-0"
              iconOnly
              onClick={() => {
                dialogRef.current?.close();
              }}
              variant={{
                type: "linkGray",
                size: "2xl",
              }}
            >
              <RiCloseFill className="p-[0.125rem]" />
            </Button>
            {title}
          </h2>
          {message && (
            <p className="mt-2 text-sm text-neutral-600">{message}</p>
          )}
        </form>
      </dialog>
    </div>
  );
});

ModalDialog.displayName = "ModalDialog";
