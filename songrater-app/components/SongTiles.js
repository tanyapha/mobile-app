import React, { useState } from "react";
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
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useForm, Controller } from "react-hook-form";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const SongTile = ({ song, artist, ratings, songId, setSongList, user }) => {
  const [modalVisible, setModalVisible] = useState(false);

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
          <Text style={styles.modalMainText}>{song} </Text>
          <Text style={styles.modalSubText}>{artist}</Text>
        </View>
        <Text style={styles.modalMainText}>{ratings}</Text>
      </Pressable>
      {modalVisible ? (
        <RatingModal
          songName={song}
          artistName={artist}
          songId={songId}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          setSongList={setSongList}
          user={user}
        />
      ) : null}
    </View>
  );
};

export default function SongTiles({ songList, setSongList, user }) {
  const renderSongList = ({ item }) => {
    return (
      <SongTile
        song={item.song}
        artist={item.artist}
        ratings={item.ratings}
        songId={item.id}
        setSongList={setSongList}
        user={user}
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
