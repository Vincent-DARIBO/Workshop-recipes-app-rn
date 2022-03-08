import React from "react";
import { Platform, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const isIos = Platform.OS === "ios";

export default function DrawerIcon({ onPress }) {
  return (
    <Feather
      name="menu"
      size={40}
      color={isIos ? "blue" : "white"}
      style={styles.drawerIcon}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  drawerIcon: {
    paddingRight: 10,
  },
});
