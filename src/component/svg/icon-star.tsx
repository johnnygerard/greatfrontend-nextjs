import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const IconStar = memo((props: Props) => {
  return (
    <svg viewBox="0 0 18 18" fill="currentColor" {...props}>
      <path d="M9.00044 13.3472L4.10221 16.0891L5.19619 10.5833L1.07495 6.77211L6.64928 6.11118L9.00044 1.01392L11.3516 6.11118L16.9259 6.77211L12.8047 10.5833L13.8986 16.0891L9.00044 13.3472ZM9.00044 11.7556L11.9495 13.4063L11.2909 10.0915L13.7722 7.79683L10.416 7.39887L9.00044 4.3299L7.58485 7.39887L4.22865 7.79683L6.70997 10.0915L6.0513 13.4063L9.00044 11.7556Z" />
    </svg>
  );
});

IconStar.displayName = "IconStar";
