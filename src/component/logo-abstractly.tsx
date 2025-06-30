import { LogomarkAbstractly } from "@/component/svg/logomark-abstractly";
import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
};

export const LogoAbstractly = memo(({ className }: Props) => {
  return (
    <div className={clsx("flex w-fit items-center gap-1 pe-0.5", className)}>
      <LogomarkAbstractly aria-hidden />
      <span className="font-bold -tracking-[0.06rem] text-neutral-900">
        Abstractly
      </span>
    </div>
  );
});

LogoAbstractly.displayName = "LogoAbstractly";
