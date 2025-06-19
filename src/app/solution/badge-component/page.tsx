import { Badge } from "@/component/badge";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Badge Component",
};

const Page = () => {
  const LABEL = "Label";
  const types = ["neutral", "error", "warning", "success", "brand"] as const;
  const sizes = ["small", "medium", "large"] as const;

  return (
    <div className="min-h-screen bg-white py-50">
      <ul className="mx-auto flex w-60 flex-wrap items-center gap-6">
        {types.map((type) =>
          sizes.map((size) => (
            <li key={`${type}-${size}`}>
              <Badge variant={{ type, size }}>{LABEL}</Badge>
            </li>
          )),
        )}
      </ul>
    </div>
  );
};

export default memo(Page);
