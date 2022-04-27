import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ActivityIndicator,
} from "react-native";
import StarRating from "react-native-star-rating";

import * as Navigation from "./Navigation";
import { styles } from "../styles";
import SongTiles from "./SongTiles";
import EditScreen from "./Edit";
import { getSongList } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let [songItem, setSongItem] = React.useState({
    id: "tanya",
    song: "hi",
    artist: "",
    rating: undefined,
    ratings: [],
  });

  let [user, setUser] = React.useState("");

  let getName = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      if (value !== null) {
        setUser(value);
        console.log(user);
      }
    } catch (error) {
      console.log("error");
    }
  };

  let [userItem, setUserItem] = React.useState([]);
  let [songList, setSongList] = React.useState([]);
  let [loading, setLoading] = React.useState(false);

  const focused = useIsFocused();

  React.useEffect(() => {
    getSongList(setSongList);
    getName();
  }, [focused]);

  refreshSong = () => {
    getSongList(setSongList);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large"></ActivityIndicator>
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
      <SongTiles songList={songList} setSongList={setSongList} />
    </View>
  );
}
