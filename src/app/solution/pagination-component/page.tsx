"use client";
import { Pagination } from "@/component/pagination";
// import { Metadata } from "next";
import { memo } from "react";

// export const metadata: Metadata = {
//   title: "Pagination Component",
// };

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white py-50">
      <div className="flex flex-col items-center gap-6">
        <Pagination onPageChange={() => {}} pageCount={3} />
        <Pagination onPageChange={() => {}} pageCount={3} iconOnly={true} />
        <Pagination onPageChange={() => {}} pageCount={10} />
        <Pagination
          className="max-sm:hidden"
          onPageChange={() => {}}
          pageCount={10}
          defaultPage={5}
        />
      </div>
    </main>
  );
};

export default memo(Page);
