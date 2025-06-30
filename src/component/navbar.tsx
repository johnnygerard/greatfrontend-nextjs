"use client";
import { Button } from "@/component/button";
import { LogoAbstractly } from "@/component/logo-abstractly";
import { IconClose } from "@/component/svg/icon-close";
import { IconHamburgerMenu } from "@/component/svg/icon-hamburger-menu";
import { clsx } from "clsx";
import Link from "next/link";
import { memo, useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      {/* Desktop */}
      <div className={clsx("px-28 pt-4 max-xl:hidden", className)}>
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
      </div>

      {/* Mobile and tablet */}
      <div className={clsx("xl:hidden", className)}>
        {/* Navigation bar */}
        <div className="flex h-17 items-center justify-between px-4 pt-4 sm:px-8">
          <LogoAbstractly />
          <Button
            iconOnly
            variant={{ size: "sm", type: "linkGray" }}
            onClick={() => {
              setIsMenuOpen(true);
            }}
          >
            <IconHamburgerMenu />
          </Button>
        </div>

        {/* Backdrop */}
        <div
          aria-hidden
          className={clsx(
            "fixed inset-0 bg-neutral-950 transition-opacity duration-300 ease-in-out",
            isMenuOpen ? "opacity-70" : "pointer-events-none opacity-0",
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Navigation drawer */}
        <div
          className={clsx(
            "flex flex-col gap-6",
            "fixed top-0 bottom-0 left-0 w-90 max-w-screen bg-white px-4 pt-8 pb-4",
            "transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between">
            <LogoAbstractly />
            <Button
              iconOnly
              variant={{ size: "sm", type: "linkGray" }}
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              <IconClose />
            </Button>
          </div>
          <nav aria-label="Main" className="flex-1">
            <ul className="space-y-2">
              {links.map(({ text, path }) => (
                <li key={path}>
                  <Link
                    className="block rounded px-3 py-2 text-sm text-neutral-900 hocus:bg-neutral-100"
                    href={path}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Button
              asNextLink
              href="/learn-more"
              variant={{ size: "lg", type: "secondary" }}
            >
              Learn more
            </Button>
            <Button
              className="mt-4"
              asNextLink
              href="/pricing"
              variant={{ size: "lg", type: "primary" }}
            >
              Try it out
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";
