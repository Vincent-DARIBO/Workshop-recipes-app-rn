import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default function Button({ title, onPress, children }) {
  return (
    <TouchableRipple style={styles.button} onPress={() => onPress()}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {children}
        <View style={{ width: 20 }} />
        <Text style={styles.title}>{title.toLocaleUpperCase()}</Text>
      </View>
    </TouchableRipple>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    height: 45,
  },
  title: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
});
