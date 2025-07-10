import { Checkbox } from "@/component/checkbox";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Checkbox Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-[1.09375rem] py-50">
      <Checkbox defaultChecked="indeterminate" />
    </main>
  );
};

export default memo(Page);
