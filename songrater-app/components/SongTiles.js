import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import { styles } from "../styles";

const ratingRound = ({ ratings }) => {
  console.log(ratings);
  let average = 0;
  for (let val of ratings) {
    average += val;
  }
  return Math.round((average / ratings.length) * 2) / 2;
};

const SongTile = ({ song, artist, ratings }) => {
  const ratingRound = () => {
    console.log(ratings);
    let average = 0;
    for (let val of ratings) {
      average += val;
    }
    return Math.round((average / ratings.length) * 2) / 2;
  };

  return (
    <View
      style={[
        styles.tiles,
        {
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      <View>
        <Text style={{ fontSize: 25 }}>{song} </Text>
        <Text style={{ fontSize: 15 }}>{artist}</Text>
      </View>
      <Text style={{ fontSize: 25 }}>{ratingRound()}</Text>
    </View>
  );
};

export default function SongTiles({ songList }) {
  const renderSongList = ({ item }) => {
    return (
      <SongTile song={item.song} artist={item.artist} ratings={item.ratings} />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songList}
        renderItem={renderSongList}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
