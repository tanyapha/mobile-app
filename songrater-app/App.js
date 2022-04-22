import * as React from "react";
// import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {navigationRef} from './components/Navigation';
import DashboardScreen from "./components/Dashboard";
import EditScreen from "./components/Edit";
import SongForm from "./components/SongForm";
import { styles } from "./styles";

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
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

export default MyStack;
