import { Switch } from "@/component/switch";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Toggle Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-[1.09375rem] py-50">
      <div className="flex gap-6">
        {[false, true].map((checked) => (
          <div key={`${checked}`} className="flex flex-col items-center gap-6">
            <Switch defaultChecked={checked} variant="sm" />
            <Switch defaultChecked={checked} variant="md" />
          </div>
        ))}
      </div>
    </main>
  );
};

export default memo(Page);
