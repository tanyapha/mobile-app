import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SongTiles from "./components/SongTiles";
import { styles } from "./styles";

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

  const API = "https://songrater-comp333.herokuapp.com/api/";

  React.useEffect(() => {
    fetch(API + "song/")
      .then((response) => response.json())
      .then((json) => {
        setSongList(json);
        console.log(songList[0]);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <Text style={{ fontSize: 30, textAlign: "center", paddingTop: 50 }}>
        Song Rater App
      </Text>
      <SongTiles songList={songList} />
    </View>
  );
}
