import { differenceInDays } from "date-fns";

export function gamePriceEstimate(rating, dateReleased) {
  const basePrice = 80;
  const ratingRatio = !rating ? 0.3 : rating / 100;
  const daysSinceRelease = differenceInDays(new Date(), dateReleased);
  const releaseDecreaseRate = 0.0003;
  const releaseRatio =
    daysSinceRelease >= 1825
      ? 0.25
      : 1 - (daysSinceRelease * releaseDecreaseRate) / 100;

  return Math.ceil(basePrice * ratingRatio * releaseRatio);
}
