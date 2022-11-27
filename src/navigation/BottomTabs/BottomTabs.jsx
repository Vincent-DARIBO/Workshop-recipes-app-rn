import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import AddScreen from "../../screens/Add";
import MyRecepies from "../../screens/MyRecepies";
import FavoritesRecepiesScreen from "../../screens/FavoritesRecepies";
import Home from "../../screens/Home";

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ tabBarActiveTintColor: "green", headerShown: false }}
    >
      <BottomTabNavigator.Screen
        name="Home"
        component={Home}
        options={{
          headerBackground: "blue",
          tabBarIcon: () => <Entypo name="home" size={30} color={"green"} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="My recepies"
        component={MyRecepies}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="notebook" size={26} color={"green"} />
          ),
        }}
      />

      <BottomTabNavigator.Screen
        name="Favorites"
        component={FavoritesRecepiesScreen}
        options={{
          tabBarIcon: () => <Entypo name="heart" size={30} color={"green"} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: () => <Entypo name="plus" size={30} color={"green"} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}
