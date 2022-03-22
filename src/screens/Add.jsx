import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Switch,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
// TO DO : finir le style, error handling et faire la fonction pour ajouter une recette
export default function AddScreen() {
  const [title, setTitle] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [image, setImage] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [isUrl, setIsUrl] = React.useState(false);

  function onTitleChange(newTitle) {
    setTitle(newTitle);
  }
  function onCategoryChange(categoryTitle) {
    setCategory(categoryTitle);
  }
  function toggleSwitch() {
    setIsUrl((isUrl) => !isUrl);
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onTitleChange}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onCategoryChange}
        value={category}
        placeholder="Category name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onCategoryChange}
        value={category}
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
            onChangeText={onTitleChange}
            value={title}
            placeholder={isUrl ? "Url" : "Path"}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("add an item")}
      >
        <Text style={{ color: "white", fontSize: 15 }}>Add</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    width: "80%",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
  },
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageInput: {
    width: "100%",
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
