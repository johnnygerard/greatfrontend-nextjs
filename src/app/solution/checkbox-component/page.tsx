import { Checkbox } from "@/component/checkbox";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Metadata } from "next";
import { Label } from "radix-ui";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Checkbox Component",
};

const Page = () => {
  const states = new Map<CheckedState, string>([
    [false, "Unchecked"],
    [true, "Checked"],
    ["indeterminate", "Indeterminate"],
  ]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-[1.09375rem] py-50">
      <div className="w-60 space-y-6">
        {Array.from(states.entries()).map(([state, label]) => {
          const id = `checkbox-${label.toLowerCase()}`;

          return (
            <div className="flex items-center gap-3" key={id}>
              <Checkbox id={id} defaultChecked={state} />
              <Label.Root className="text-neutral-600" htmlFor={id}>
                {label}
              </Label.Root>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default memo(Page);
