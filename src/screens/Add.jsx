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
  ScrollView,
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

  function toggleSwitch() {
    setIsUrl((isUrl) => !isUrl);
  }

  function onAddPress() {
    const newRecepie = {
      id: 1,
      title,
      category,
      isFav: false,
      imagePath: {
        uri: image,
      },
    };
    if (title.length && category.length && image.length && description.length) {
      setRecepies([...recepies, newRecepie]);
      setMyRecepies([...myRecepies, newRecepie]);
      Keyboard.dismiss();
      setTitle("");
      setCategory("");
      setImage("");
      setDescription("");
      setAreFieldsFilled(true);
    } else setAreFieldsFilled(false);
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView} centerContent>
        <View style={styles.inputsContainer}>
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Title"
          />
          <TextInput
            style={styles.input}
            onChangeText={setCategory}
            value={category}
            placeholder="Category name"
          />
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Description"
          />
          <View style={styles.imageInput}>
            <View style={styles.switchContainer}>
              <Text style={{ right: 10 }}>URL image ?</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isUrl ? "white" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isUrl}
                style={{
                  right: 10,
                }}
              />
            </View>
            <View style={{ alignItems: "center" }}>
              <TextInput
                style={styles.input}
                onChangeText={setImage}
                value={image}
                placeholder={isUrl ? "Url" : "Path"}
              />
            </View>
          </View>
          {!areFieldsFilled ? (
            <Text style={{ color: "red" }}>You must fill all the fields</Text>
          ) : null}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => onAddPress()}>
          <Text style={{ color: "white", fontSize: 15 }}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
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
