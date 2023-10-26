import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';

import Card from '../components/Card';
import { HOME_SCREEN } from '../utils/tests/testIDs';
import { useRecipe } from '../hooks/useRecepiesReducer';
import { data } from '../data/recepies';
import { Category } from '../components/CardCorrection';

export default function Home({ navigation }) {
  const { recipes } = useRecipe(data.recepies);
  const [filter, setFilter] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(recipes.filter((item) => item.category === filter));
  }, [filter]);

  const renderItem = ({ item }) => (
    <Card
      title={item.title}
      category={item.category}
      image={item.imagePath}
      onCardPress={() =>
        navigation.navigate('Details', { recepie: { ...item, canLike: true } })
      }
      canLike
      isFav={item.isFav}
    />
  );

  console.log({ filter });

  return (
    <SafeAreaView style={styles.container} testID={HOME_SCREEN}>
      <FlatList
        data={['cookie', 'cake', 'bakery']}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              if (filter === item) {
                console.log('first condition');
                setFilter('');
                setFilteredList([]);
              } else {
                console.log('pressed', item, { filter });
                setFilter(item);
              }
            }}
            style={{
              margin: 10,
              padding: 5,
              borderRadius: 10,
              justifyContent: 'center',
              opacity: 0.5,
              borderWidth: 1,
              backgroundColor: filter === item ? 'lightblue' : undefined,
              height: 50,
            }}
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <View>
        <FlatList
          data={filteredList.length ? filteredList : recipes}
          renderItem={renderItem}
          keyExtractor={(item, index) => {
            return (item.id + index).toString();
          }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 50,
    // flex: 1,
  },
});
