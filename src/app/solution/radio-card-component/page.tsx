import { RadioCard } from "@/component/radio-card";
import {
  RiArrowDownSLine,
  RiCalendarLine,
  RiCalendarTodoLine,
  RiCalendarView,
} from "@remixicon/react";
import { clsx } from "clsx";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Radio Card Component",
};

const Page = () => {
  const sizes = ["sm", "md", "lg", "xl", "2xl"] as const;
  const labels = ["Weekly", "Monthly", "Annually"] as const;

  return (
    <main className="grid min-h-screen place-items-center bg-white px-[1.09375rem] py-28">
      <div className="flex flex-col items-center gap-8">
        {labels.map((label) => {
          const Icon =
            label === "Weekly"
              ? RiCalendarView
              : label === "Monthly"
                ? RiCalendarTodoLine
                : RiCalendarLine;

          return (
            <div
              className={clsx(
                "max-w-80 sm:max-w-112 xl:max-w-none",
                "flex flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-6",
              )}
              key={label}
            >
              {sizes.map((size) => {
                const padding = size === "2xl" ? "p-0.5" : "p-[0.10419rem]";

                return (
                  <RadioCard
                    defaultChecked={label === "Monthly"}
                    disabled={label === "Annually"}
                    key={`${label}-${size}`}
                    icon={size === "2xl" && <Icon className={padding} />}
                    iconLeft={
                      (size === "sm" || size === "xl") && (
                        <Icon className={padding} />
                      )
                    }
                    iconRight={
                      (size === "lg" && <Icon className={padding} />) ||
                      (size === "xl" && (
                        <RiArrowDownSLine className={padding} />
                      ))
                    }
                    label={label}
                    name={size}
                    variant={{ size }}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default memo(Page);
