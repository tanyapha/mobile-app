import React, { useState } from "react";
import { Modal, View, Text, Button, Pressable } from "react-native";
import * as Navigation from "./Navigation";
import { styles } from "../styles";
import { deleteSong, handleRating } from "./API";

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
  console.log(rating);

  return (
    <Modal transparent={true} visible={true} isOpen={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Pressable onPress={() => props.setModalVisible(false)}>
            <Text>close</Text>
          </Pressable>
          <Text style={styles.modalMainText}>{props.songName}</Text>
          <Text style={styles.modalSubText}>{props.artistName}</Text>
          <StarRatingDisplay changeRating={updateRating} />
          <Pressable
            onPress={() =>
              handleEdit(
                props.songName,
                props.artistName,
                props.songId,
                props.setModalVisible
              )
            }
          >
            <Text>Edit</Text>
          </Pressable>
          <Pressable
            onPress={() => handleDelete(props.songId, props.setModalVisible)}
          >
            <Text>Delete</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              handleRating(props.songId, rating, props.setSongList)
            }
          >
            <Text>Rate</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
