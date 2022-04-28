import React from "react";
import { styles } from "../styles";
import { Text, View, TextInput, Button } from "react-native";
import * as Navigation from "./Navigation";
import { addSong } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";

export default function SongForm({route}) {
  const {username} = route.params;
  const [upSong, setUpSong] = React.useState("");
  const [upArtist, setUpArtist] = React.useState("");
  const [upRating, setUpRating] = React.useState(0);

  const handleSubmit = () => {
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
          onChangeText={(val) => setUpSong(val)}
        />
        <Text style={styles.songFormText}>Artist Name</Text>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          placeholder="Enter an artist name"
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
