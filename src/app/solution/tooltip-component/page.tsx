import { Tooltip } from "@/component/tooltip";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Tooltip Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-[1.09375rem] py-50">
      <Tooltip
        className="translate-y-4.75"
        defaultOpen={true}
        label="This is a tooltip"
      >
        {/* Empty placeholder */}
        <div />
      </Tooltip>
    </main>
  );
};

export default memo(Page);
