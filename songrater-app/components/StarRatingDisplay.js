import React, { Component } from "react";
import StarRating from "react-native-star-rating";

export default function StarRatingDisplay() {
  let [starRating, setStarRating] = React.useState(0);

  let onStarRatingPress = (rating) => {
    setStarRating(rating);
  };

  return (
    <StarRating
      disabled={false}
      maxStars={5}
      rating={starRating}
      halfStarEnabled={true}
      selectedStar={(rating) => onStarRatingPress(rating)}
    />
  );
}
