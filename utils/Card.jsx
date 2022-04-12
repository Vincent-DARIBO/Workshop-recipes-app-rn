import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRecepies } from "../providers/ItemsProvider";
// TODO: trouver comment display les favoris
export default function Card({ title, category, image , onCardPress}) {
  const [isSelected, setIsSelected] = React.useState(false);
  const { recepies, favorites, setFavorites } = useRecepies();

  const onPress = () => {
    if (isSelected) {
      setIsSelected(false);
    } else {
      setIsSelected(true);
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onCardPress} activeOpacity={0.5}>
      <Image source={image} style={styles.image} />

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
        <Ionicons
          name="heart"
          size={26}
          color={isSelected ? "red" : "#d9d9d9"}
          onPress={() => onPress()}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: "white",
    width: "40%",
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageContainer: {
    borderRadius: 20,
    width: "100%",
    height: 110,
    backgroundColor: "pink",
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 0,
    width: "100%",
    height: 110,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryContainer: {
    padding: 10,
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  category: {
    fontSize: 15,
    fontStyle: "italic",
  },
});
