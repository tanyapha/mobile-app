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

export default function SongTiles({ songList }) {
  const [modalVisible, setModalVisible] = useState(false);
  const SongTile = ({ item }) => {
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
              {item.song}{" "}
            </Text>
            <Text style={{ fontSize: 15, fontFamily: "PoppinsLight" }}>
              {item.artist}
            </Text>
          </View>
          <Text style={{ fontSize: 20, fontFamily: "PoppinsBold" }}>
            {item.ratings}
          </Text>
        </Pressable>
        {modalVisible ? (
          <RatingModal
            songName={item.song}
            artistName={item.artist}
            songId={item.songId}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={songList}
        renderItem={SongTile}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}
