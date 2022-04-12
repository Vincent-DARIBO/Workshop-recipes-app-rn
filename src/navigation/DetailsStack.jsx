import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/Details";
import BottomTabsNavigator from "./BottomTabs/BottomTabs";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function DetailsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="My recepies App"
        options={{ headerShown: false }}
      />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
}
