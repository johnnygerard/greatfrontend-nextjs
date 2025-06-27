import { LogoAbstractly } from "@/component/logo-abstractly";
import { memo } from "react";

type Props = {
  className?: string;
};

export const Navbar = memo(({ className }: Props) => {
  return (
    <div className={className}>
      <LogoAbstractly />
    </div>
  );
});

Navbar.displayName = "Navbar";
