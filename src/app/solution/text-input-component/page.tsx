import { Solution } from "@/app/solution/text-input-component/solution";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Text Input Component",
};

const Page = () => {
  return <Solution />;
};

export default memo(Page);
