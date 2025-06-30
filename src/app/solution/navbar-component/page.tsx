import { Navbar } from "@/component/navbar";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Navbar Component",
};

const Page = () => {
  return (
    <main className="min-h-screen bg-linear-(--lg-canvas)">
      <Navbar />
    </main>
  );
};

export default memo(Page);
