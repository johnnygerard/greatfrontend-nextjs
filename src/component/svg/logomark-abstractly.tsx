import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGSVGElement>;

export const LogomarkAbstractly = memo((props: Props) => {
  return (
    <svg className="size-8" viewBox="0 0 32 32" fill="#6366F1" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5006 23.8999H20.8638L21.7445 26.5H10.6199L11.5006 23.8999ZM4.26556 26.499L11.8635 5.5H4.33333C3.04467 5.5 2 6.54467 2 7.83333V24.1667C2 25.4327 3.00824 26.4632 4.26556 26.499ZM28.1524 26.4494C29.2079 26.2259 30 25.2888 30 24.1667V7.83333C30 6.54467 28.9553 5.5 27.6667 5.5H20.5724L28.1524 26.4494ZM16.1822 9.99793L19.2914 19.1825H13.1088L16.1822 9.99793Z"
      />
    </svg>
  );
});

LogomarkAbstractly.displayName = "LogomarkAbstractly";
