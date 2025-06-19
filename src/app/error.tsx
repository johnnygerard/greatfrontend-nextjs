"use client";
import { memo } from "react";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

const Error = ({ reset }: Props) => {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default memo(Error);
