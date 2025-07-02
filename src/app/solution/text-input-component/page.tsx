import { TextInput } from "@/component/text-input";
import { RiMailLine, RiQuestionLine } from "@remixicon/react";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Text Input Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white px-[1.09375rem] py-28">
      <div className="flex w-85 flex-col gap-12">
        <TextInput
          type="email"
          label="Email"
          placeholder="name@email.com"
          iconRight={<RiQuestionLine />}
          hint="This is a hint text."
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="name@email.com"
          iconLeft={<RiMailLine />}
          iconRight={<RiQuestionLine />}
          hint="This is a hint text."
        />
        <TextInput
          type="email"
          disabled
          label="Email"
          placeholder="name@email.com"
          iconRight={<RiQuestionLine />}
          hint="This is a hint text."
        />
        <TextInput
          type="email"
          label="Email"
          placeholder="name@email.com"
          defaultValue="name@email.com"
          iconRight={<RiQuestionLine />}
          iconRightShowsError
          error="This is an error message."
          hint="This is a hint text."
        />
      </div>
    </main>
  );
};

export default memo(Page);
