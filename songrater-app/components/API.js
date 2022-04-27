import React from "react";
import ratingRound from "./RatingRound";

const api = "http://127.0.0.1:8000/api/";

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
  console.log(item.rating);
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

export function deleteSong(id) {
  fetch(api + "song/" + id + "/", {
    method: "DELETE",
  }).then(console.log(id));
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

export function handleRating(song_id) {
  fetch(api + "rating/?username=" + "test1" + "&song_id=" + song_id).then(
    (res) => {
      if (res.data.length === 0) {
        // this.addRating(item.id, item.rating);
        console.log("add");
      } else {
        // this.updateRating(res.data[0], item.rating);
        console.log("update");
      }
    }
  );
  return;
}
