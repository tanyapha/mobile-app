import React, { useState } from "react";
import { Modal, View, Text, Button, Pressable } from "react-native";
import * as Navigation from "./Navigation";
import { styles } from "../styles";
import { deleteSong, getUsername, handleRating } from "./API";

import StarRatingDisplay from "./StarRatingDisplay";
import { set } from "react-native-reanimated";

export default function RatingModal(props) {
  let [rating, setRating] = useState(0);

  const updateRating = (rating) => {
    setRating(rating);
  };

  const handleEdit = (songName, artistName, songId, setModalVisible) => {
    setModalVisible(false);
    Navigation.navigate("Edit", {
      song: songName,
      artist: artistName,
      id: songId,
    });
  };

  const handleDelete = (songId, setModalVisible) => {
    deleteSong(songId, props.setSongList);
    console.log("The song was deleted!");
    setModalVisible(false);
  };
  //console.log(rating);

  return (
    <Modal transparent={true} visible={true} isOpen={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalMainText}>{props.songName}</Text>
          <Text style={styles.modalSubText}>{props.artistName}</Text>
          <StarRatingDisplay changeRating={updateRating} />
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() =>
                handleEdit(
                  props.songName,
                  props.artistName,
                  props.songId,
                  props.setModalVisible
                )
              }
            >
              <Text style={{ color: "blue" }}>Edit</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => handleDelete(props.songId, props.setModalVisible)}
            >
              <Text style={{ color: "red" }}>Delete</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() =>
                handleRating(
                  props.user,
                  props.songId,
                  rating,
                  props.setSongList
                )
              }
            >
              <Text style={{ color: "green" }}>Rate</Text>
            </Pressable>
          </View>

          <Pressable onPress={() => props.setModalVisible(false)}>
            <Text>close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
