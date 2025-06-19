import { Metadata } from "next";
import Link from "next/link";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1>404 Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default memo(NotFound);
