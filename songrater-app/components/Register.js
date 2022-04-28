import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  View,
  Text,
  Alert,
} from "react-native";
import * as Navigation from "./Navigation";

const api = "http://127.0.0.1:8000/api/auth/register";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleSubmit = async () => {
    if (!this.state.username) {
      alert("Please enter username");
      return;
    }
    if (!this.state.password) {
      alert("Please enter password");
      return;
    }
    fetch(api, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.token) {
          alert("Username already exist. Please enter a different username.");
          //setErrorText(true);
        } else {
          console.log(data);
          alert(
            "Welcome! " +
              data.user.username +
              ". You have successfully registered!"
          );
          Navigation.navigate("Login");
        }
      })
      // need to fix the error message displaying stuff
      .catch((err) => console.error(err));
  };

  onUsernameChanged = (newUsername) => {
    this.setState({ username: newUsername });
  };

  onPasswordChanged = (newPassword) => {
    this.setState({ password: newPassword });
  };

  render() {
    return (
      <TouchableOpacity activeOpacity={1.0} style={styles.container}>
        <Text style={styles.header}>Join Songrater!</Text>
        <View style={styles.inputBox}>
          <TextInput
            placeholder={"username"}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor={"#ccc"}
            onChangeText={this.onUsernameChanged.bind(this)}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            placeholder={"password"}
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            placeholderTextColor={"#ccc"}
            onChangeText={this.onPasswordChanged.bind(this)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={styles.btText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.endText}>Already have an account?</Text>
          <Text
            style={styles.endHyperText}
            onPress={() => {
              Navigation.navigate("Login");
            }}
          >
            Log In here!
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    color: "#64ae89",
    fontWeight: "bold",
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1913",
  },
  input: {
    width: 200,
    height: 40,
    fontSize: 20,
    color: "#fff", // text as white color
  },
  inputBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#525453",
    marginBottom: 8,
  },
  button: {
    height: 50,
    width: 280,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "#64ae89",
    marginTop: 8,
  },
  btText: {
    color: "#fff",
    fontSize: 20,
  },
  endText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "right",
    marginTop: 40,
  },
  endHyperText: {
    color: "#64ae89",
    fontSize: 18,
    textAlign: "right",
    marginTop: 5,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
