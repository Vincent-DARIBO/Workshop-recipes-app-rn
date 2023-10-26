import React, { useReducer } from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CARD, CARD_ICON, CARD_IMAGE } from '../utils/tests/testIDs';
// TODO: trouver comment display les favoris

export type Category = 'cake' | 'italian food' | 'mexican food' | 'cookie' | 'bakery';
type Props = {
  title: string;
  category: Category;
  image: ImageSourcePropType;
  onCardPress: () => void;
  canLike: boolean;
  isFav: boolean;
};
export default function Card({
  title,
  category,
  image,
  onCardPress,
  canLike = false,
  isFav = false,
}: Props) {
  const [toggled, toggleElement] = useReducer((val) => !val, false);


  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onCardPress}
      activeOpacity={0.5}
      testID={CARD}
    >
      <Image source={image} style={styles.image} testID={CARD_IMAGE} />

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
        {true && (
          <Ionicons
            name="heart"
            size={26}
            color={toggled ? 'red' : '#d9d9d9'}
            onPress={() => toggleElement()}
            testID={CARD_ICON}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    width: '40%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    borderRadius: 20,
    width: '100%',
    height: 110,
    backgroundColor: 'pink',
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 0,
    width: '100%',
    height: 110,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryContainer: {
    padding: 10,
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontSize: 15,
    fontStyle: 'italic',
  },
});
