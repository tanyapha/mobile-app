import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
} from "react-native";
import { styles } from "../styles";
import * as Navigation from './Navigation';
import { useForm, Controller } from 'react-hook-form';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const ratingRound = ({ ratings }) => {
  console.log(ratings);
  let average = 0;
  for (let val of ratings) {
    average += val;
  }
  return Math.round((average / ratings.length) * 2) / 2;
};

const SongTile = ({ song, artist, ratings, navigation }) => {
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
        <Button
          title="Edit"
          onPress={() => {
            Navigation.navigate("Edit", {
              song: {song},
              artist: {artist},
            });
          }}
        />
        <Button
          title="Delete"
        />
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
