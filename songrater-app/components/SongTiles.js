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
import { deleteSong } from "./API";
import RatingModal from "./RatingModal";
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

const SongTile = ({ song, artist, ratings, songId, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
        />
      ) : null}
    </View>
  );
};

export default function SongTiles({ songList }) {
  const renderSongList = ({ item }) => {
    return (
      <SongTile
        song={item.song}
        artist={item.artist}
        ratings={item.ratings}
        songId={item.id}
      />
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
