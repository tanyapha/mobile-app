import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import StarRating from "react-native-star-rating";

import * as Navigation from "./Navigation";
import { styles } from "../styles";
import SongTiles from "./SongTiles";
import EditScreen from "./Edit";
import { getSongList } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import { useIsFocused } from "@react-navigation/native";

export default function App() {
  let [songItem, setSongItem] = React.useState({
    id: "tanya",
    song: "hi",
    artist: "",
    rating: undefined,
    ratings: [],
  });

  let [userItem, setUserItem] = React.useState([]);
  let [songList, setSongList] = React.useState([]);
  let [formShow, setFormShow] = React.useState(false);
  let [currentlyEditing, useCurrentlyEditing] = React.useState(false);
  let [currentlyRating, setCurrentlyRating] = React.useState(false);

  const focused = useIsFocused();

  React.useEffect(() => {
    getSongList(setSongList);
  }, [focused]);

  refreshSong = () => {
    getSongList(setSongList);
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          paddingTop: 50,
          fontFamily: "PoppinsBold",
          letterSpacing: 1.5,
        }}
      >
        Song Rater
      </Text>
      <Button
        title="New song"
        onPress={() => {
          Navigation.navigate("SongForm");
        }}
      />
      <SongTiles songList={songList} />
    </View>
  );
}
