import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
} from "react-native";

import { useRecepies } from "../providers/ItemsProvider";

export default function AddScreen() {
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isUrl, setIsUrl] = React.useState(false);
  const [areFieldsFilled, setAreFieldsFilled] = React.useState(true);
  const { recepies, setRecepies, myRecepies, setMyRecepies } = useRecepies();

  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    width: "90%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 20,
  },
  inputsContainer: {
    height: "70%",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    flex: 1,
  },
  imageInput: {
    width: "100%",
    marginVertical: 10,
  },
  switchContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    backgroundColor: "green",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50,
  },
});
