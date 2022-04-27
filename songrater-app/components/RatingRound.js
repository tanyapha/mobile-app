export default function ratingRound(ratings) {
  let average = 0;
  for (let val of ratings) {
    average += val;
  }
  return Math.round(average / ratings.length);
}
