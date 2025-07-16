import { Button } from "@/component/button";
import { RiArrowLeftLongLine } from "@remixicon/react";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <main className="grid min-h-screen place-items-center px-4">
      <div className="flex max-w-md flex-col items-center text-center">
        <hgroup>
          <p className="text-6xl font-bold text-gray-900">404</p>
          <h1 className="mt-6 text-2xl font-semibold text-gray-800">
            Page Not Found
          </h1>
          <p className="mt-2 text-gray-600">
            Sorry, the page you are looking for does not exist.
          </p>
        </hgroup>
        <Button
          asNextLink
          className="mt-6"
          href="/"
          iconLeft={<RiArrowLeftLongLine />}
          variant={{
            type: "tertiary",
            size: "md",
          }}
        >
          Back to Home
        </Button>
      </div>
    </main>
  );
};

export default memo(NotFound);
