import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const IconClose = memo((props: Props) => {
  return (
    <svg viewBox="0 0 20 20" {...props}>
      <path
        className="fill-neutral-600"
        d="M10.0006 8.82208L14.1253 4.69727L15.3038 5.87577L11.1791 10.0006L15.3038 14.1253L14.1253 15.3038L10.0006 11.1791L5.87577 15.3038L4.69727 14.1253L8.82208 10.0006L4.69727 5.87577L5.87577 4.69727L10.0006 8.82208Z"
      />
    </svg>
  );
});

IconClose.displayName = "IconClose";
