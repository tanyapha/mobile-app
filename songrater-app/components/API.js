import React from "react";
//import AsyncStorage from '@react-native-async-storage/async-storage';
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

export function deleteSong(id) {
  fetch(api + "song/" + id + "/", {
    method: "DELETE",
  }).then(console.log(id))
}

// I moved these to Login.js  and Register.js but we can decide where we would like it to be

/* export function userLogin(data) {
  fetch(api + 'auth/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    })
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.token){
        console.log('Incorrect credentials. Please check your username or password.');
        //setErrorText(true);
      } else {
        console.log('Hi!'+ data.user.username + '; Your Token: ' + data.token)
        AsyncStorage.setItem('token',JSON.stringify(data.token));
        AsyncStorage.setItem('user',JSON.stringify(data.user));
        alert('Successfully logged in!');
      }
    })
    // need to fix the error message displaying stuff
    .catch((err) => console.error(err));
} */

/* export function userRegister(data) {
  fetch(api + 'auth/register', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json',
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    })
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data.token){
        alert('Username already exist. Please enter a different username.');
        //setErrorText(true);
      } else {
        console.log(data);
        alert('Successfully registered!');
      }
    })
    // need to fix the error message displaying stuff
    .catch((err) => console.error(err));
} */