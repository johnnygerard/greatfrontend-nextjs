import { TextArea } from "@/component/text-area";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Text Area Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white px-[1.09375rem] py-28">
      <div className="flex w-full max-w-85 flex-col gap-8">
        <TextArea
          label="Description"
          placeholder="Write your message..."
          maxLength={500}
        />
        <TextArea
          label="Description"
          placeholder="Enter a description..."
          defaultError="This field is required"
          required
          validationMessages={{ valueMissing: "This field is required." }}
        />
        <TextArea
          disabled
          label="Description"
          placeholder="Write your message..."
          maxLength={500}
        />
      </div>
    </main>
  );
};

export default memo(Page);
