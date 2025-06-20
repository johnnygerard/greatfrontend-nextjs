import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const IconStar = memo((props: Props) => {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" {...props}>
      <path d="M10.0005 15.2167L4.12258 18.5068L5.43536 11.8999L0.489868 7.3265L7.17907 6.53338L10.0005 0.416664L12.8218 6.53338L19.511 7.3265L14.5655 11.8999L15.8783 18.5068L10.0005 15.2167ZM10.0005 13.3067L13.5394 15.2876L12.749 11.3097L15.7265 8.55616L11.6991 8.07861L10.0005 4.39585L8.30174 8.07861L4.2743 8.55616L7.25188 11.3097L6.46148 15.2876L10.0005 13.3067Z" />
    </svg>
  );
});

IconStar.displayName = "IconStar";
