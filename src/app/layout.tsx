import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { memo, ReactNode } from "react";

const notoSans = Noto_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-noto-sans",
  weight: ["400", "500", "600", "700"],
});

const APP_NAME = "GreatFrontEnd";
const TITLE = `${APP_NAME} Solutions`;
const DESCRIPTION =
  "Browse my collection of solutions to GreatFrontEnd Projects, demonstrating my frontend engineering expertise.";

export const metadata: Metadata = {
  metadataBase: new URL("https://placeholder.example.com"),
  title: {
    template: `%s | ${APP_NAME}`,
    default: TITLE,
  },
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    url: "/",
    siteName: APP_NAME,
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Props = {
  children: ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html className={notoSans.variable} lang="en-US">
      <body className="font-sans text-base font-normal not-italic [font-optical-sizing:auto]">
        {children}
      </body>
    </html>
  );
};

export default memo(RootLayout);
