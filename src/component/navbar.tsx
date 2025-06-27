import { memo } from "react";

type Props = {
  className?: string;
};

export const Navbar = memo(({ className }: Props) => {
  return <div className={className}>navbar</div>;
});

Navbar.displayName = "Navbar";
