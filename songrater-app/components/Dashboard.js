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
import { getSongList, getUsername } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  let [user, setUser] = React.useState("");
  let [userItem, setUserItem] = React.useState([]);
  let [songList, setSongList] = React.useState([]);
  let [loading, setLoading] = React.useState(false);

  const focused = useIsFocused();

  React.useEffect(() => {
    getSongList(setSongList);
    getUsername(setUser);
  }, [focused]);

  refreshSong = () => {
    getSongList(setSongList);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "right",
          paddingTop: 10,
          marginRight: 20,
          fontFamily: "PoppinsBold",
          letterSpacing: 1.5,
        }}
      >
        Hi {user.charAt(0).toUpperCase() + user.slice(1)}!
      </Text>
      {/* <ActivityIndicator size="large"></ActivityIndicator> */}
      {/* <StatusBar style="auto" /> */}
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
          paddingTop: 20,
          fontFamily: "PoppinsBold",
          letterSpacing: 1.5,
        }}
      >
        Song Rater
      </Text>
      <Button
        title="New song"
        onPress={() => {
          Navigation.navigate("SongForm", {
            username: user, 
          });
        }}
      />
      <SongTiles songList={songList} setSongList={setSongList} user={user} />
    </View>
  );
}
