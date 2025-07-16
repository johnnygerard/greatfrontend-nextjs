import { Solution } from "@/app/solution/pagination-component/solution";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Pagination Component",
};

const Page = () => {
  return <Solution />;
};

export default memo(Page);
