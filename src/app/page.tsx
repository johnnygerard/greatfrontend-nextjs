import Link from "next/link";
import { memo } from "react";

const HomePage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-50">
      <section className="flex flex-col items-center rounded-xl border border-neutral-200 bg-white px-8 py-10 shadow-lg">
        <h1 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-900">
          GreatFrontEnd Solutions
        </h1>
        <ul className="space-y-3">
          {[
            {
              text: "Badge Component",
              url: "/solution/badge-component",
            },
            {
              text: "Button Component",
              url: "/solution/button-component",
            },
            {
              text: "Navbar Component",
              url: "/solution/navbar-component",
            },
            {
              text: "Text Input Component",
              url: "/solution/text-input-component",
            },
            {
              text: "Text Area Component",
              url: "/solution/text-area-component",
            },
          ].map(({ text, url }) => (
            <li key={text}>
              <Link
                href={url}
                className="block rounded-lg border border-neutral-200 bg-neutral-100 px-5 py-2 text-center text-neutral-800 transition-colors hocus:bg-neutral-200 hocus:text-black"
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default memo(HomePage);
