"use client";

interface ReviewsProps {
  rating: number;
  count?: number;
  size?: "sm" | "md";
}

const STAR_COLORS = "text-[#f0c96b]";

export function Reviews({ rating, count = 0, size = "sm" }: ReviewsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  const sizeClass = size === "sm" ? "size-3" : "size-4";
  const textSize = size === "sm" ? "text-[0.6rem]" : "text-[0.7rem]";

  return (
    <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of 5 stars${count ? `, ${count} reviews` : ""}`}>
      {Array.from({ length: fullStars }, (_, i) => (
        <svg key={`full-${i}`} viewBox="0 0 24 24" aria-hidden="true" className={`${sizeClass} ${STAR_COLORS}`}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
        </svg>
      ))}
      {hasHalf && (
        <svg key="half" viewBox="0 0 24 24" aria-hidden="true" className={`${sizeClass} ${STAR_COLORS}`}>
          <defs>
            <linearGradient id={`half-grad-${rating}`}>
              <stop offset="50%" stopColor="currentColor" />
              <stop offset="50%" stopColor="#d4d4d4" />
            </linearGradient>
          </defs>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={`url(#half-grad-${rating})`} />
        </svg>
      )}
      {Array.from({ length: emptyStars }, (_, i) => (
        <svg key={`empty-${i}`} viewBox="0 0 24 24" aria-hidden="true" className={`${sizeClass} text-stone-300 dark:text-stone-600`}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" />
        </svg>
      ))}
      {count > 0 && (
        <span className={`${textSize} font-medium text-[#5d6c67] dark:text-[#8a9a94]`}>
          ({count})
        </span>
      )}
    </div>
  );
}
