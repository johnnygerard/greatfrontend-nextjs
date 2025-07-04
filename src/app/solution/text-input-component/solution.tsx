"use client";
import { TextInput } from "@/component/text-input";
import { RiMailLine, RiQuestionLine } from "@remixicon/react";
import { memo } from "react";

export const Solution = memo(() => {
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
          defaultError="This is an error message."
          defaultValue="name@email.com"
          iconRight={<RiQuestionLine />}
          iconRightShowsError
          hint="This is a hint text."
        />
      </div>
    </main>
  );
});

Solution.displayName = "Solution";
