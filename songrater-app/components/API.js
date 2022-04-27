import React from "react";
import ratingRound from "./RatingRound";

// const api = "http://127.0.0.1:8000/api/";
const api = "https://songrater-comp333.herokuapp.com/api/";

export function getSongList(setSongList) {
  fetch(api + "song/")
    .then((response) => response.json())
    .then((json) => {
      let averageRating = json.map((e) => {
        return { ...e, ratings: ratingRound(e.ratings) };
      });
      setSongList(averageRating);
    })
    .catch((error) => console.error(error));
}

export function addRating(song_id, rating) {
  fetch(api + "rating/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song_id: song_id,
      username: "test1",
      rating: rating,
    }),
  }).then(console.log("yay!!! rating for new song added"));
}

export function addSong(item) {
  fetch(api + "song/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      song: item.song,
      artist: item.artist,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      addRating(data.id, item.rating);
    });
}

export function deleteSong(id, setSongList) {
  fetch(api + "song/" + id + "/", {
    method: "DELETE",
  })
    .then(console.log(id))
    .then(getSongList(setSongList));
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
  }).then(console.log("yay, its been updated 😍!!!"));
}

export function handleRating(song_id, rating, setSongList) {
  fetch(api + "rating/?username=" + "test1" + "&song_id=" + song_id)
    .then((response) => response.json())
    .then((json) => {
      if (json.length === 0) {
        addRating(song_id, rating);
        console.log("add");
      } else {
        updateRating(json[0], rating);
        console.log("update");
      }
    })
    .then(getSongList(setSongList));
  return;
}
