import React, { Component } from "react";
import StarRating from "react-native-star-rating";
import { View } from "react-native";

export default function StarRatingDisplay({ changeRating }) {
  let [starRating, setStarRating] = React.useState(0);

  let onStarRatingPress = (rating) => {
    setStarRating(rating);
    changeRating(rating);
  };

  return (
    <View style={{ justifyContent: "center", flexDirection: "row" }}>
      <StarRating
        starStyle={{ margin: 10, borderColor: "#D7DBDD" }}
        fullStarColor="#FFC300"
        starSize={50}
        disabled={false}
        maxStars={5}
        rating={starRating}
        selectedStar={(rating) => onStarRatingPress(rating)}
      />
    </View>
  );
}
