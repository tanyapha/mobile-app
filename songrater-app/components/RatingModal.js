import React, { useState } from "react";
import { Modal, View, Text, Button, Pressable } from "react-native";
import * as Navigation from "./Navigation";
import { styles } from "../styles";
import { deleteSong } from "./API";

import StarRatingDisplay from "./StarRatingDisplay";

export default function RatingModal(props) {
  const handleEdit = (songName, artistName, songId, setModalVisible) => {
    setModalVisible(false);
    Navigation.navigate("Edit", {
      song: songName,
      artist: artistName,
      id: songId,
    });
  };

  const handleDelete = (songId, setModalVisible) => {
    deleteSong(songId);
    console.log("The song was deleted!");
    setModalVisible(false);
  };

  return (
    <Modal transparent={true} visible={true} isOpen={props.modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalMainText}>{props.songName}</Text>
          <Text style={styles.modalSubText}>{props.artistName}</Text>
          <StarRatingDisplay />
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
          <Pressable onPress={() => props.setModalVisible(false)}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
