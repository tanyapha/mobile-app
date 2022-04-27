import React from 'react';
import {styles} from '../styles';
import { Text, View, StyleSheet, TextInput, Alert, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function EditScreen ({ route, navigation }) {
  const { song, artist } = route.params;
  return (
    <View>
      <Text style={{ fontSize: 25 }}>{JSON.stringify(song)}</Text>
      <Text style={{ fontSize: 15 }}>{JSON.stringify(artist)}</Text>
    </View>
  );
};
