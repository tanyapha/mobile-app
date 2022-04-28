import React from "react";
import ratingRound from "./RatingRound";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/core";

const api = "http://127.0.0.1:8000/api/";
// const api = "https://songrater-comp333.herokuapp.com/api/";

export async function getUsername(setUser) {
  try {
    const value = await AsyncStorage.getItem("user");
    if (value !== null) {
      setUser(value);
    }
  } catch (error) {
    console.log("error");
  }
}

export function getSongList(setSongList) {
  fetch(api + "song/")
    .then((response) => response.json())
    .then((json) => {
      let averageRating = json.map((e) => {
        return { ...e, ratings: ratingRound(e.ratings) };
      });
      console.log("refresh");
      setSongList(averageRating);
    })
    .catch((error) => console.error(error));
}

export function addRating(user, song_id, rating) {
  fetch(api + "rating/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song_id: song_id,
      username: user,
      rating: rating,
    }),
  }).then(console.log("YES! " + user + " added a rating: " + rating));
}

export function addSong(user, newsong, newartist, newrating) {
  fetch(api + "song/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song: newsong,
      artist: newartist,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      addRating(user, data.id, newrating);
      console.log("WOW! " + user + " rated a new song: " + newrating);
    });
}

export function deleteSong(id, setSongList) {
  fetch(api + "song/" + id + "/", {
    method: "DELETE",
  })
    .then(console.log("DELETE song id: " + id))
    .then(
      setTimeout(() => {
        getSongList(setSongList);
      }, 8)
    );
}

export function updateSong(song, artist, id) {
  fetch(api + "song/" + id + "/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song_id: id,
      song: song,
      artist: artist,
    }),
  }).then(console.log("The song has been updated!"));
}

export function updateRating(song_info, rating) {
  fetch(api + "rating/" + song_info.id + "/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song_id: song_info.song_id,
      username: song_info.username,
      rating: rating,
    }),
  }).then(
    console.log("YAY! " + song_info.username + " updated a rating: " + rating)
  );
}

export function handleRating(user, song_id, rating, setSongList) {
  console.log(user);
  fetch(api + "rating/?username=" + user + "&song_id=" + song_id)
    .then((response) => response.json())
    .then((json) => {
      if (json.length === 0) {
        //console.log(user + " added");
        addRating(user, song_id, rating);
      } else {
        //console.log(user + "updated");
        updateRating(json[0], rating);
      }
    })
    .then(
      setTimeout(() => {
        getSongList(setSongList);
      }, 8)
    );
  return;
}
