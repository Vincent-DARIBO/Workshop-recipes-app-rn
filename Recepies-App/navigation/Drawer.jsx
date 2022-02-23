import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";

import Blank from "./Blank";

const Drawer = createDrawerNavigator();
//TODO: voir avec kery pour le details screen
//TODO: essayer de faire une bottom banner au lieu du drawer
export function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={() => <DrawerContent />}
      screenOptions={{ drawerPosition: "right" }}
    >
      <Drawer.Screen
        name="Blank"
        component={Blank}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
