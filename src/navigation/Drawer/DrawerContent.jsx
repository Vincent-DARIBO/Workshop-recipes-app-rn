import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Linking, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export function DrawerContent() {
  return (
    <DrawerContentScrollView>
      <DrawerItem
        icon={() => <Ionicons name="logo-instagram" size={20} color={"blue"} />}
        label="Instagram"
        onPress={() =>
          Linking.openURL("https://www.instagram.com/emmanuelmacron/")
        }
      />
      <DrawerItem
        label="Twitter"
        icon={() => <Ionicons name="logo-twitter" size={20} color={"blue"} />}
        onPress={() => Linking.openURL("https://twitter.com/emmanuelmacron")}
      />
      <DrawerItem
        label="Snapchat"
        icon={() => (
          <FontAwesome name="snapchat-ghost" size={20} color={"blue"} />
        )}
        onPress={() =>
          Linking.openURL("https://www.snapchat.com/add/emmanuelmacron")
        }
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
});
