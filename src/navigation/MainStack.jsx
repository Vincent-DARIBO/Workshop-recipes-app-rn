import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "../screens/Details";
import Home from "../screens/Home";
import BottomTabsNavigator from "./BottomTabs/BottomTabs";

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={BottomTabsNavigator}
        name="BottomTabs"
      />
      <Stack.Screen component={Details} name="Details" />
    </Stack.Navigator>
  );
}
