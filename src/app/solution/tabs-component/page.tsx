import { TabMenu } from "@/component/tab-menu";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Tabs Component",
};

const Page = () => {
  return (
    <main className="flex min-h-screen justify-center bg-white px-4 py-50">
      <TabMenu
        className="w-75 max-w-full"
        variant="inline"
        tabs={[
          {
            label: "Account",
            content:
              "The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.",
          },
          {
            label: "Security",
            content:
              "The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.",
          },
          {
            label: "Plan",
            content:
              "The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.",
          },
        ]}
      />
    </main>
  );
};

export default memo(Page);
