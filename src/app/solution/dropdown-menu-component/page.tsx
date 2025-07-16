import { DropdownMenu } from "@/component/dropdown-menu";
import { RiGlobeLine, RiLock2Line, RiMistFill } from "@remixicon/react";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Dropdown Menu Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white py-50">
      <div className="w-68">
        <DropdownMenu
          closeOnSelect={false}
          defaultOpen={true}
          defaultValue="private"
          // Animations are disabled for the purpose of screenshot diffs
          enabledAnimations={false}
          label="Privacy options"
          options={[
            {
              icon: <RiGlobeLine aria-hidden />,
              id: "public",
              label: "Public",
            },
            {
              icon: <RiMistFill aria-hidden />,
              id: "unlisted",
              label: "Unlisted",
            },
            {
              icon: <RiLock2Line aria-hidden />,
              id: "private",
              label: "Private",
            },
          ]}
        />
      </div>
    </main>
  );
};

export default memo(Page);
