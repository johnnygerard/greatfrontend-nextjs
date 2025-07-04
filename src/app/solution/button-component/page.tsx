import { Button } from "@/component/button";
import { RiStarLine } from "@remixicon/react";
import { clsx } from "clsx";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Button Component",
};

const Page = () => {
  const types = [
    "primary",
    "secondary",
    "tertiary",
    "linkColor",
    "linkGray",
    "destructive",
  ] as const;
  const icon = (size: string) => (
    <span
      className={clsx("block", size === "2xl" ? "p-0.5" : "p-[0.10419rem]")}
    >
      <RiStarLine className="size-full" />
    </span>
  );

  return (
    <div className="flex min-h-screen justify-center bg-white px-6 py-28 sm:px-8">
      <ul className="space-y-12">
        {types.map((type) => (
          <li key={type}>
            <ul className="flex flex-wrap items-center gap-5 max-sm:pr-1">
              {(["md", "lg", "xl", "2xl", "2xl"] as const).map((size, i) => (
                <li key={i}>
                  <Button
                    iconOnly={i === 4}
                    iconLeft={i === 1 ? icon(size) : undefined}
                    iconRight={i === 2 ? icon(size) : undefined}
                    variant={{
                      type,
                      // The following design mistake (xl instead of 2xl for tertiary)
                      // is intentionally reproduced for vanity purposes.
                      size: type === "tertiary" && i === 3 ? "xl" : size,
                    }}
                  >
                    {i === 4 ? icon(size) : "Button CTA"}
                  </Button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Page);
