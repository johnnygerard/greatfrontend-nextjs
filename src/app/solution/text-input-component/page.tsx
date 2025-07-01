import { TextInput } from "@/component/text-input";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Text Input Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white py-28">
      <TextInput />
    </main>
  );
};

export default memo(Page);
