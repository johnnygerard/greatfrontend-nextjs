import { Button } from "@/component/button";
import { LogoAbstractly } from "@/component/logo-abstractly";
import { clsx } from "clsx";
import { memo } from "react";

const links: Array<{
  text: string;
  path: string;
}> = [
  { text: "Home", path: "/" },
  { text: "Features", path: "/features" },
  { text: "Pricing", path: "/pricing" },
  { text: "About us", path: "/about-us" },
  { text: "Contact", path: "/contact" },
];

type Props = {
  className?: string;
};

export const Navbar = memo(({ className }: Props) => {
  return (
    <header className={clsx("px-28 pt-4 max-xl:hidden", className)}>
      <div className="flex items-center gap-24 py-3">
        <LogoAbstractly />
        <nav aria-label="Main" className="flex-1">
          <ul className="flex gap-8">
            {links.map(({ text, path }) => (
              <li key={path}>
                <Button
                  asNextLink
                  href={path}
                  variant={{ size: "lg", type: "linkGray" }}
                >
                  {text}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-4">
          <Button
            asNextLink
            href="/learn-more"
            variant={{ size: "lg", type: "secondary" }}
          >
            Learn more
          </Button>
          <Button
            asNextLink
            href="/pricing"
            variant={{ size: "lg", type: "primary" }}
          >
            See pricing
          </Button>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";
