import React from "react";
import { Modal, View, Text, Button, Pressable,TouchableOpacity } from "react-native";
import * as Navigation from "./Navigation";
import { styles } from "../styles";

export default function AddsongModal(props) {
    return (
        <Modal transparent={true} visible={true} isOpen={props.modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalMainText}>YAY! {props.user.charAt(0).toUpperCase() + props.user.slice(1)}</Text>
              <Text style={styles.modalSubText}>Your new song has been successfully added!</Text>
              <TouchableOpacity
                style={styles.buttonBack}
                onPress={() => {Navigation.navigate("Dashboard");}}
              >
                <Text style={styles.btText}>Return to Dashboard</Text>
              </TouchableOpacity>   
            </View>
          </View>
        </Modal>
      );
}