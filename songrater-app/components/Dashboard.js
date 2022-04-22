import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

import * as Navigation from './Navigation';
import { styles } from "../styles";
import SongTiles from "./SongTiles";
import EditScreen from "./Edit";


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
