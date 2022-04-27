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
import * as Navigation from "./Navigation";
import { useForm, Controller } from "react-hook-form";
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
<<<<<<< HEAD
      <Pressable
        onPress={() => setModalVisible(true)}
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontSize: 20, fontFamily: "PoppinsBold" }}>
            {song}{" "}
          </Text>
          <Text style={{ fontSize: 15, fontFamily: "PoppinsLight" }}>
            {artist}
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontFamily: "PoppinsBold" }}>
          {ratingRound()}
        </Text>
      </Pressable>
      {modalVisible ? (
        <RatingModal
          songName={song}
          artistName={artist}
          songId={songId}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
=======
      <View>
        <Text style={{ fontSize: 30, fontFamily: "FredokaOne" }}>{song} </Text>
        <Text style={{ fontSize: 20, fontFamily: "FredokaOne" }}>{artist}</Text>
        <Button
          title="Edit"
          onPress={() => {
            Navigation.navigate("Edit", {
              song: { song },
              artist: { artist },
            });
          }}
>>>>>>> parent of 7185dff (Merge branch 'form' into starRating)
        />
        <Button title="Delete" />
      </View>
      <Text style={{ fontSize: 25, fontFamily: "FredokaOne" }}>
        {ratingRound()}
      </Text>
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
