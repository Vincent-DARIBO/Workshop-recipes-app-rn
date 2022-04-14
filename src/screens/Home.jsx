import React from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";

import Card from "../components/Card";
import { useRecepies } from "../providers/ItemsProvider";
import AddScreen from "./Add";

export default function Home() {
  const { recepies } = useRecepies();
  const [change, setChange] = React.useState(0);

  function move() {
    if (change == 0) setChange(1);
    else setChange(0);
  }
  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      category={item.category}
      image={item.imagePath}
      onCardPress={() => console.log("navigate")}
    />
  );
  const renderItem2 = ({ item }) => (
    <TouchableOpacity onPress={() => move()}>
      <Text style={{ left: 10, fontSize: 30 }}>{item.title}</Text>
    </TouchableOpacity>
  );
  const names = [
    { id: 1, title: "Home" },
    { id: 2, title: "Add" },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          style={{ width: "100%" }}
          data={names}
          renderItem={renderItem2}
          keyExtractor={(item, index) => {
            return (item.id + index).toString();
          }}
          ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
          horizontal
        />
      </View>
      {change == 0 ? (
        <View>
          <FlatList
            data={recepies}
            renderItem={renderItem}
            keyExtractor={(item, index) => {
              return (item.id + index).toString();
            }}
            numColumns={2}
          />
        </View>
      ) : (
        <AddScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
});
