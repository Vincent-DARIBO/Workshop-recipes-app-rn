import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Card from "../components/Card";
import { useRecepies } from "../providers/ItemsProvider";

export default function MyRecepies() {
  const { myRecepies } = useRecepies();

  const renderItem = ({ item }) => (
    <Card title={item.title} category={item.category} image={item.imagePath} />
  );

  return (
    <View>
      {myRecepies.length == 0 ? (
        <View style={styles.container}>
          <Text>You have no recepie yet</Text>
        </View>
      ) : (
        <FlatList
          data={myRecepies}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return (item.id + index).toString();
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
