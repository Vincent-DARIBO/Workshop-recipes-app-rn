import React from 'react';
import { SafeAreaView, View, Image, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRecepies } from '../providers/ItemsProvider';
import Button from '../components/Button';

export default function Details({ route }) {
  const { recepie } = route.params;
  const { recepies, setRecepies} = useRecepies();
  const [isFav, setIsFav] = React.useState(recepie.isFav)

  const addToFav = () => {
    setRecepies(
      recepies.map((item) =>
        item.title === recepie.title ? { ...item, isFav: true } : item
      )
    );
    setIsFav(true);
  };

  const removeFromFav = () => {
    setRecepies(
      recepies.map((item) =>
        item.title === recepie.title ? { ...item, isFav: false } : item
      )
    );
    setIsFav(false);
  };
  const title = !isFav ? 'Add to' : 'Remove from';
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
          <Button
            title={title + ' favorite'}
            onPress={() => (isFav ? removeFromFav() : addToFav())}
            style={{backgroundColor : isFav ? "red" : "green"}}
          >
            <Ionicons
              name={isFav ? 'trash' : 'heart'}
              size={20}
              color="white"
            />
          </Button>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: 200,
  },
  titleContainer: {
    marginTop: 5,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontStyle: 'italic',
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
    flexDirection: 'row',
  },
  modal: {
    justifyContent: 'space-between',
    marginTop: 5,
    alignItems: 'center',
  },
  more: {
    marginVertical: 5,
  },
  switch: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 80,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    bottom: 10,
  },
});
