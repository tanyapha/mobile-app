import React, { Component } from 'react';
import {styles} from '../styles';
import { updateSong } from "./API";
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Navigation from "./Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function Edit ({ route, navigation }) {
  const { song, artist, id } = route.params;
  const [upSong, setUpSong] = React.useState([]);
  const [upArtist, setUpArtist] = React.useState([]);

  const handleSubmit = () => {
    console.log(upSong);
    console.log(upArtist);
    console.log(id);
    updateSong(upSong, upArtist, id)
    Navigation.navigate("Dashboard")
  };

  return (
    <View>
      <Text>Song Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        defaultValue={JSON.stringify(song)}
        onChangeText={(val) => setUpSong(val)}
      />
      <Text>Artist Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        defaultValue={JSON.stringify(artist)}
        onChangeText={(val) => setUpArtist(val)}
      />
      <Button
        title="Save"
        onPress={handleSubmit}
      />
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
