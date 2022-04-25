import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./DrawerContent";

import BottomTabsNavigator from "../BottomTabs/BottomTabs";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="My recepies app" component={BottomTabsNavigator} />
    </Drawer.Navigator>
  );
}
