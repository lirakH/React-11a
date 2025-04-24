import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/HomeScreen";
import SingleItem from "../screens/SingleItem";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeS" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SingleItem" component={SingleItem} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;