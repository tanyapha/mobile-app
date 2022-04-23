import React from "react";

const api = "https://songrater-comp333.herokuapp.com/api/";

export function getSongList(setSongList) {
  fetch(api + "song/")
    .then((response) => response.json())
    .then((json) => {
      setSongList(json);
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
