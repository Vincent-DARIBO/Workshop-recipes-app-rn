import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";

import BottomTabsNavigator from "../BottomTabs/BottomTabs";

const Drawer = createDrawerNavigator();
//TODO: voir avec kery pour le details screen
//TODO: essayer de faire une bottom banner au lieu du drawer
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen
        name="My recepies app"
        component={BottomTabsNavigator}
        // options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
