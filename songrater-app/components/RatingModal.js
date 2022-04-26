import React, { useState } from "react";
import { Modal, View, Text, Button, Pressable } from "react-native";
import { styles } from "../styles";
import { deleteSong } from "./API";

const handleDelete = (id) => {
  console.log(id);
  deleteSong(id);
};

export default function RatingModal({ songId }) {
  console.log(songId);
  return (
    <Modal
      transparent={true}
      visible={true}
      // onRequestClose={() => {
      //   setModalVisible(!modalVisible);
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text>hj</Text>
          <Text>hi</Text>
          <Text>okay</Text>
          <Button title="Edit" />
          <Button title="Delete" onPress={handleDelete(songId)} />
          <Pressable onPress={() => console.log("close")}>
            <Text>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
