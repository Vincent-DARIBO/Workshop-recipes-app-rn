import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Blank from "./navigation/Blank";
import { DrawerNavigator } from "./navigation/Drawer";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
