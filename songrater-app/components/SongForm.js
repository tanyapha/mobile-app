import React, {Component} from 'react';
import {styles} from '../styles';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import * as Navigation from './Navigation';


export default class SongForm extends Component {
  state = {
    song: '',
    artist: '',
    rate: '',
    validRating: null,
  }

  handleChange = (key, val) => {
    this.setState({
      mobile: val.replace(/[^0-9]/g, ''),
      [key]: val
    })
  }

  handleSubmit = async () => {
    const { song, artist, rating } = this.state;
    Navigation.navigate("Dashboard");
  }

  validateInput = (val) => {
    const num = /^[0-9\b]+$/;
    if (val > 1 && val < 5 && num.test(val) ) {
      this.setState({ validRating: true });
    } else if (val === "") {
      this.setState({ validRating: null });
    } else {
      this.setState({ validRating: false });
    }
  };

  render () {
    return (
      <View>
      <Text>Song Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder='Enter a song name'
        onChangeText={val => this.handleChange('song', val)}
      />
      <Text>Artist Name</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        placeholder='Enter an artist name'
        onChangeText={val => this.handleChange('artist', val)}
      />
      <Text>Rating</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder='Enter an artist name'
        onChangeText={val => {
          this.validateInput(val);
          this.handleChange('rating', val);
        }}
      />
        <Button
            title="Save"
            onPress={this.handleSubmit}
            disabled={
              this.state.song === "" ||
              this.state.artist === "" ||
              (!this.state.validRating && !this.props.currentlyEditing)
                ? true
                : false
            }
        />
      </View>
    );
  }
};
