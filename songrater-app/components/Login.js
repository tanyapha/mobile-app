import React, { Component } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
  Button
} from 'react-native';
import * as Navigation from "./Navigation";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Login extends Component {
  state = {
    username : '',
    password : '',
  };

  handleSubmit = async () => {
    if (!this.state.username) {
      alert('Please enter username');
      return;
    }
    if (!this.state.password) {
      alert('Please enter password');
      return;
    }
    fetch("https://songrater-comp333.herokuapp.com/api/auth/login", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token){
          alert('Incorrect credentials. Please check your username or password.');
          //setErrorText(true);
        } else {
          console.log('Hi!'+ data.user.username + '; Your Token: ' + data.token)
          AsyncStorage.setItem('token',JSON.stringify(data.token));
          AsyncStorage.setItem('user',JSON.stringify(data.user));
          alert('Hi! '+data.user.username + ', you successfully logged in!');
          Navigation.navigate("Dashboard");
        }
      })
      // need to fix the error message displaying stuff
      .catch((err) => console.error(err));
  }

  onUsernameChanged = (newUsername) => {
      this.setState({ username : newUsername});
  }

  onPasswordChanged = (newPassword) => {
      this.setState({ password : newPassword});
  };

  render() {
    return (
      <TouchableOpacity
          activeOpacity={1.0}
          style={styles.container}>
          <View
              style={styles.inputBox}>
              <TextInput
                  placeholder={'username'}
                  style={styles.input}
                  autoCapitalize='none'
                  autoCorrect={false}
                  placeholderTextColor={'#ccc'}
                  onChangeText = {this.onUsernameChanged.bind(this)}
              />
          </View>
          <View
              style={styles.inputBox}>
              <TextInput
                  placeholder={'password'}
                  style={styles.input}
                  autoCapitalize='none'
                  autoCorrect={false}
                  secureTextEntry={true}
                  placeholderTextColor={'#ccc'}
                  onChangeText = {this.onPasswordChanged.bind(this)}
              />
          </View>
          <TouchableOpacity
              style={styles.button}>
              <Text
                  style={styles.btText}
                  onPress={this.handleSubmit}>
                  Log in
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}>
              <Text
                  style={styles.btText}
                  onPress={() => {Navigation.navigate("Register");}}>
                  Register
              </Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}>
              <Text
                  onPress={() => {Navigation.navigate("SongForm");}}
                  style={styles.btText}>Song Form</Text>
          </TouchableOpacity>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    input: {
        width: 200,
        height: 40,
        fontSize: 20,
        color: '#fff', // text as white color
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 280,
        height: 50,
        borderRadius: 8,
        backgroundColor: '#66f',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#66f',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});