import * as React from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
// import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createAppContainer } from "react-navigation";

import { navigationRef } from "./components/Navigation";
import DashboardScreen from "./components/Dashboard";
import EditScreen from "./components/Edit";
import SongForm from "./components/SongForm";
import { styles } from "./styles";
import Login from './components/Login';
import Register from './components/Register';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Log In" }}
        />
        <Stack.Screen
          name='Register'
          component = {Register}
          options={{ title: 'Registration'}}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ title: "Songrater" }}
        />
        <Stack.Screen
          name="Edit"
          component={EditScreen}
          options={{ title: "Edit" }}
        />
        <Stack.Screen
          name="SongForm"
          component={SongForm}
          options={{ title: "Add a new song" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MainApp = createAppContainer(MyStack);

export default class App extends React.Component {
  state = {
    fontLoaded: false,
  };

  fontLoadAsync = async () => {
    let load = await Font.loadAsync({
      PoppinsReg: require("./assets/fonts/Poppins-Regular.ttf"),
      PoppinsBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
      FredokaOne: require("./assets/fonts/FredokaOne-Regular.ttf"),
      PoppinsLight: require("./assets/fonts/Poppins-Light.ttf"),
    });
    this.setState({ fontLoaded: load });
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <AppLoading
          startAsync={this.fontLoadAsync}
          onFinish={() => this.setState({ fontLoaded: true })}
          onError={console.warn}
        />
      );
    }
    // from the custom App we return the component we assigned to RootApp.
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "Log In" }}
          />
          <Stack.Screen
            name='Register'
            component = {Register}
            options={{ title: 'Registration'}}
          />
          <Stack.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{ title: "Songrater" }}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
            options={{ title: "Edit" }}
          />
          <Stack.Screen
            name="SongForm"
            component={SongForm}
            options={{ title: "Add a new song" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
