import { IconStar } from "@/component/svg/icon-star";
import { clsx } from "clsx";
import { memo } from "react";

type Props = {
  className?: string;
  rating?: number;
};

const STAR_COUNT = 5;

/**
 * Display an average star rating.
 */
export const StarRating = memo(({ className, rating = 0 }: Props) => {
  if (rating < 0 || rating > STAR_COUNT) {
    console.error(`RangeError: Rating must be between 0 and ${STAR_COUNT}`, {
      rating,
    });
    rating = 0;
  }

  const label = `Rating: ${rating.toFixed(1)} out of ${STAR_COUNT}`;

  return (
    <>
      <span className="sr-only">{label}</span>
      <div aria-hidden className={clsx("flex gap-1", className)} title={label}>
        {Array.from({ length: STAR_COUNT }, (_, index) => (
          <IconStar
            key={index}
            className="size-5"
            rating={Math.max(0, Math.min(1, rating - index))}
          />
        ))}
      </div>
    </>
  );
});

StarRating.displayName = "StarRating";
