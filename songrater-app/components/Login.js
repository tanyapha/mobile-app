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

export default class Login extends Component {
  state = {
    username : '',
    password : '',
  };

  handleSubmit = async () => {
    userLogin(this.state);
    console.log(this.state);
    Navigation.navigate("Dashboard");
  };

  onUsernameChanged = (newUsername) => {
      console.log(newUsername);
      this.setState({ username : newUsername});
  }

  onPasswordChanged = (newPassword) => {
      console.log(newPassword);
      this.setState({ password : newPassword});
  };

/*   login = () => {
      if (this.username == "jiner" && this.password == "jiner") {
          const { navigate } = this.props.navigation;
          navigate('Dashboard');
      } else {
        Alert.alert('Log in failed','Incorrect username or password');
      }
  } */

/*   register = () => {
      const { navigate } = this.props.navigation;
      navigate('Resgiter');
  } */

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