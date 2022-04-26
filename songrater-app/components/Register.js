import React, { Component } from 'react';
import { 
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View, 
  Text,
  Alert
} from 'react-native';
//import { userRegister } from './API';
import * as Navigation from "./Navigation";

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
    fetch('https://songrater-comp333.herokuapp.com/api/auth/register', {
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
          alert('Username already exist. Please enter a different username.');
          //setErrorText(true);
        } else {
          console.log(data);
          alert('Welcome! '+data.user.username + '. You have successfully registered!');
          Navigation.navigate("Login");
        }
      })
      // need to fix the error message displaying stuff
      .catch((err) => console.error(err));
  };

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
          <Text style={styles.header}>Join Songrater!</Text>
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
                  onPress={this.handleSubmit}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.button}>
              <Text
                  style={styles.btText}
                  onPress={() => {Navigation.navigate("Login");}}>
                  Log In Here
              </Text>
          </TouchableOpacity> 
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    header: {
      fontSize: 40,
      justifyContent: 'center',
      alignItems:'center',
      flexDirection:'row',
      color: '#483d8b',
      fontWeight: 'bold',
      paddingVertical: 12,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF', // backgroun color mediumturquoise
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
        backgroundColor: '#483d8b',
        marginBottom: 8,
    },
    button: {
        height: 50,
        width: 280,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        backgroundColor: '#f4a460',
        marginTop: 20,
    },
    btText: {
        color: '#fff',
        fontSize: 20,
    }
});