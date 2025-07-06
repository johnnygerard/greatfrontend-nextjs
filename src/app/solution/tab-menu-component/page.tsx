import { Tab } from "@/component/tab";
import { Metadata } from "next";
import { Tabs } from "radix-ui";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Tab Menu Component",
};

const Page = () => {
  const tabs = [
    {
      id: "account",
      label: "Account",
      content:
        "The Account Management section provides a comprehensive view of your personal information and settings. Here, you can update your profile details, manage contact information, and customize your preferences to enhance your user experience.",
    },
    {
      id: "security",
      label: "Security",
      content:
        "The Security Settings section is dedicated to protecting your account and personal data. Here, you can manage various security features to ensure your information remains safe and secure.",
    },
    {
      id: "plan",
      label: "Plan",
      content:
        "The Subscription Plan section provides details about your current plan and available upgrades. Here, you can review your plan’s benefits, manage billing information, and explore other subscription options to find the best fit for your needs.",
    },
  ];

  return (
    <main className="flex min-h-screen justify-center bg-white px-4 py-50">
      <Tabs.Root className="w-75 max-w-full" defaultValue="account">
        <Tabs.List className="flex flex-wrap gap-2">
          {tabs.map(({ id, label }) => (
            <Tab key={id} label={label} value={id} />
          ))}
        </Tabs.List>
        {tabs.map(({ id, content }) => (
          <Tabs.Content className="mt-6" key={id} value={id}>
            <p className="font-medium text-black">{content}</p>
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </main>
  );
};

export default memo(Page);
