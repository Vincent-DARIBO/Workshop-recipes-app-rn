import React from "react";
import {
  SafeAreaView,
  View,
  Switch,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import {
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { useRecepies } from "../providers/ItemsProvider";
import Button from "../components/Button";

export default function Details({ route }) {
  const { recepie } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={recepie.imagePath} style={styles.image} />
        <View style={styles.padding}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{recepie.title}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>{recepie.description}</Text>
          </View>
        </View>
      </View>
      <View style={styles.button}>
        <Button title="Add to favorite" onPress={() => console.log("onpresse")}>
          <Ionicons name="heart" size={20} color="white" />
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 200,
  },
  titleContainer: {
    marginTop: 5,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 20,
  },
  descriptionContainer: {
    marginVertical: 20,
  },
  description: {
    fontSize: 15,
  },
  padding: {
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: "row",
  },
  modal: {
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  more: {
    marginVertical: 5,
  },
  switch: {
    alignItems: "center",
    justifyContent: "space-between",
    width: 80,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    bottom: 10,
  },
});
