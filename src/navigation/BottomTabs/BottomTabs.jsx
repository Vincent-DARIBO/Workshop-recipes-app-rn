import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Ionicons, SimpleLineIcons } from "@expo/vector-icons";

import { Text, View } from "react-native";
import Home from "../../screens/Home";
import AddScreen from "../../screens/Add";

const BottomTabNavigator = createBottomTabNavigator();

function Cmp({ title }) {
  return (
    <View style={{ alignSelf: "center", justifyContent: "center" }}>
      <Text>{title}</Text>
    </View>
  );
}

export default function BottomTabsNavigator() {
  return (
    <BottomTabNavigator.Navigator
      screenOptions={{ tabBarActiveTintColor: "green", headerShown: false }}
    >
      <BottomTabNavigator.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: () => <Entypo name="home" size={30} color={"green"} />,
        }}
      />
      <BottomTabNavigator.Screen
        name="my recepies"
        component={React.useCallback(
          () => (
            <Cmp title="recepies" />
          ),
          []
        )}
        options={{
          tabBarIcon: () => (
            <SimpleLineIcons name="notebook" size={26} color={"green"} />
          ),
        }}
      />

      <BottomTabNavigator.Screen
        name="add"
        component={AddScreen}
        options={{
          tabBarIcon: () => <Entypo name="plus" size={30} color={"green"} />,
        }}
      />
    </BottomTabNavigator.Navigator>
  );
}
