import React, { Component } from "react";
import { styles } from "../styles";
import { Text, View, StyleSheet, TextInput, Alert, Button } from "react-native";
import * as Navigation from "./Navigation";
import { addSong } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import { Rating } from "react-native-ratings";

export default function SongForm({route}) {
  const {username, song, artist, rating } = route.params;
  const [upSong, setUpSong] = React.useState(song);
  const [upArtist, setUpArtist] = React.useState(artist);
  const [upRating, setUpRating] = React.useState(rating);

  const handleSubmit = async () => {
    addSong(username, upSong, upArtist, upRating);
    Navigation.navigate("Dashboard");
  };

  //render() {
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
          //onChangeText={(val) => this.setState({ song: val })}
          defaultValue={JSON.stringify(song).replaceAll('"', "")}
          onChangeText={(val) => setUpSong(val)}
        />
        <Text style={styles.songFormText}>Artist Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter an artist name"
          //onChangeText={(val) => this.setState({ artist: val })}
          defaultValue={JSON.stringify(artist).replaceAll('"', "")}
          onChangeText={(val) => setUpArtist(val)}
        />
        <Text style={styles.songFormText}>Rating</Text>
        <StarRatingDisplay changeRating={(val) => setUpRating(val)}></StarRatingDisplay>
        <Button
          title="Save"
          onPress={handleSubmit}
          disabled={upSong === "" || upArtist === ""}
        />
      </View>
    );
  //}
}
