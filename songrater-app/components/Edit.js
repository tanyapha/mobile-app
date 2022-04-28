import React, { Component } from "react";
import { styles } from "../styles";
import { updateSong } from "./API";
import { Text, View, StyleSheet, TextInput, Alert, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Edit({ route, navigation }) {
  const { song, artist, id } = route.params;
  const [upSong, setUpSong] = React.useState(song);
  const [upArtist, setUpArtist] = React.useState(artist);

  const handleSubmit = () => {
    console.log(upSong, upArtist, id);
    updateSong(upSong, upArtist, id);
    Navigation.navigate("Dashboard");
  };

  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
        backgroundColor: "#FDFEFE",
      }}
    >
      <Text style={styles.songFormText}>Song Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        defaultValue={JSON.stringify(song).replaceAll('"', "")}
        onChangeText={(val) => setUpSong(val)}
      />
      <Text style={styles.songFormText}>Artist Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        defaultValue={JSON.stringify(artist).replaceAll('"', "")}
        onChangeText={(val) => {
          console.log(val);
          setUpArtist(val);
        }}
      />
      <Button title="Save" onPress={handleSubmit} />
    </View>
  );
}

// const handleChange = (key, val) => {
//   setSongItem({[key]: val});
// };

//
// const validateInput = (val) => {
//   const num = /^[0-9\b]+$/;
//   if (val > 0 && val < 6 && num.test(val)) {
//     this.setState({ validRating: true });
//   } else if (val === "") {
//     this.setState({ validRating: null });
//   } else {
//     this.setState({ validRating: false });
//   }
// }

// disabled={
//   this.state.song === "" ||
//   this.state.artist === "" ||
//   (!this.state.validRating && !this.props.currentlyEditing)
//     ? true
//     : false
// }
// onChangeText={(val) => this.handleChange("artist", val)}
// onChangeText={(val) => this.handleChange("song", val)}
// onPress={this.handleSubmit}
