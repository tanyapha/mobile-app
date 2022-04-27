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
    rating: "",
  };

  changeRating = (val) => {
    this.setState({ rating: val });
  };

  handleSubmit = async () => {
    addSong(this.state);
    setTimeout(() => {
      Navigation.navigate("Dashboard");
    }, 50);
  };

  render() {
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
          placeholder="Enter a song name"
          onChangeText={(val) => this.setState({ song: val })}
        />
        <Text style={styles.songFormText}>Artist Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter an artist name"
          onChangeText={(val) => this.setState({ artist: val })}
        />
        <Text style={styles.songFormText}>Rating</Text>
        <StarRatingDisplay changeRating={this.changeRating}></StarRatingDisplay>
        <Button
          title="Save"
          onPress={this.handleSubmit}
          disabled={this.state.song === "" || this.state.artist === ""}
        />
      </View>
    );
  }
}
