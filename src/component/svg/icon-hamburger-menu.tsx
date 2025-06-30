import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const IconHamburgerMenu = memo((props: Props) => {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        className="fill-neutral-600"
        d="M2.5 3.33333H17.5V5H2.5V3.33333ZM2.5 9.16667H17.5V10.8333H2.5V9.16667ZM2.5 15H17.5V16.6667H2.5V15Z"
      />
    </svg>
  );
});

IconHamburgerMenu.displayName = "IconHamburgerMenu";
