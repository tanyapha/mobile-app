import React from "react";
import { styles } from "../styles";
import { Text, View, TextInput, Button } from "react-native";
import * as Navigation from "./Navigation";
import { addSong } from "./API";
import StarRatingDisplay from "./StarRatingDisplay";
import AddsongModal from "./AddsongModal";

export default function SongForm({route}) {
  const {username} = route.params;
  const [song, setUpSong] = React.useState("");
  const [artist, setUpArtist] = React.useState("");
  const [rating, setUpRating] = React.useState(0);
  const [modalVisible, setModalVisible] = React.useState(false);
  const handleSubmit = () => {
    addSong(username, song, artist, rating);
    setModalVisible(true);
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
          disabled={song === "" || artist === ""}
        />
        <Button
          title="Return to Dashboard"
          onPress={() => {Navigation.navigate("Dashboard");}}
        />
        {modalVisible ? (
          <AddsongModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            user={username}
          />
        ) : null}
      </View>
    );
  //}
}
