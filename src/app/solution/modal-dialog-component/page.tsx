import { ModalDialog } from "@/component/modal-dialog";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Modal Dialog Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white py-50">
      <ModalDialog />
    </main>
  );
};

export default memo(Page);
