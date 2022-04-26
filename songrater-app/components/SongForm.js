import React, { Component } from "react";
import { styles } from "../styles";
import { Text, View, StyleSheet, TextInput, Alert, Button } from "react-native";
import * as Navigation from "./Navigation";
import { addSong } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import { Rating } from "react-native-ratings";

export default class SongForm extends Component {
  state = {
    song: "",
    artist: "",
    rate: "",
    validRating: null,
  };

  handleChange = (key, val) => {
    this.setState({
      mobile: val.replace(/[^0-9]/g, ""),
      [key]: val,
    });
  };

  handleSubmit = async () => {
    const { song, artist, rating } = this.state;
    addSong(this.state);
    Navigation.navigate("Dashboard");
  };

  render() {
    return (
      <View style={{ flexDirection: "column", justifyContent: "center" }}>
        <Text style={styles.songFormText}>Song Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter a song name"
          onChangeText={(val) => this.handleChange("song", val)}
        />
        <Text style={styles.songFormText}>Artist Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter an artist name"
          onChangeText={(val) => this.handleChange("artist", val)}
        />
        <Text style={styles.songFormText}>Rating</Text>
        <StarRatingDisplay></StarRatingDisplay>
        <Button
          title="Save"
          onPress={this.handleSubmit}
          disabled={this.state.song === "" || this.state.artist === ""}
        />
      </View>
    );
  }
}
