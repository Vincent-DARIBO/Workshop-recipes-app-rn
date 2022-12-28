import React, { useRef } from 'react';
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
  Pressable,
  Image,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRecepies } from '../providers/ItemsProvider';
import { Divider, Menu, Snackbar } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import Toast from '../components/Toast';
import Button from '../components/Button';
import ElevatedView from 'react-native-elevated-view';

export default function AddScreen() {
  const [title, setTitle] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [image, setImage] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [isMenuShown, setIsMenuShown] = React.useState(false);
  const [areFieldsFilled, setAreFieldsFilled] = React.useState(true);
  const [visible, setVisible] = React.useState(false);
  const categoryRef = useRef(null);
  const descriptionRef = useRef(null);
  const { recepies, setRecepies, myRecepies, setMyRecepies } = useRecepies();

  function openMenu() {
    setIsMenuShown(true);
  }
  function closeMenu() {
    setIsMenuShown(false);
  }
  function onDismissSnackBar() {
    setVisible((visible) => false);
  }
  function showSnackBar() {
    setVisible((visible) => true);
  }

  React.useEffect(() => {
    setTimeout(onDismissSnackBar, 2000);
  }, [visible]);

  async function onImportFromGalleryPress() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  function onAddPress() {
    const newRecepie = {
      id: 1,
      title,
      category,
      description,
      isFav: false,
      imagePath: {
        uri: image,
      },
    };
    if (title.length && category.length && image.length && description.length) {
      setRecepies([...recepies, newRecepie]);
      setMyRecepies([...myRecepies, newRecepie]);
      Keyboard.dismiss();
      setTitle('');
      setCategory('');
      setImage('');
      setDescription('');
      setAreFieldsFilled(true);
      showSnackBar();
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
            onSubmitEditing={() => categoryRef.current.focus()}
          />
          <TextInput
            style={styles.input}
            onChangeText={setCategory}
            value={category}
            placeholder="Category name"
            ref={categoryRef}
            onSubmitEditing={() => descriptionRef.current.focus()}
          />
          <TextInput
            style={styles.input}
            onChangeText={setDescription}
            value={description}
            placeholder="Description"
            ref={descriptionRef}
          />
          <>
            <Button
              title="Import image"
              onPress={() => onImportFromGalleryPress()}
              style={{
                ...styles.input,
                backgroundColor: null,
                justifyContent: 'center',
              }}
              textStyle={{ color: 'green' }}
            />
            {image && (
              <Pressable
                onLongPress={() => openMenu()}
                onPress={() => closeMenu()}
              >
                <Image source={{ uri: image }} style={styles.image} />
                {isMenuShown && (
                  <ElevatedView elevation={3} style={styles.menu}>
                    <Pressable
                      onPress={() => {
                        setImage('');
                        closeMenu();
                      }}
                    >
                      <Text style={{ color: 'grey', alignSelf: 'center' }}>
                        Delete
                      </Text>
                    </Pressable>
                  </ElevatedView>
                )}
              </Pressable>
            )}
          </>
          {!areFieldsFilled ? (
            <Text style={{ color: 'red' }}>You must fill all the fields</Text>
          ) : null}
        </View>
        <Toast
          text="Recepie successfully added"
          visible={visible}
          icon={<AntDesign name="checkcircle" size={20} color="green" />}
        />

        <TouchableOpacity style={styles.button} onPress={() => onAddPress()}>
          <Text style={{ color: 'white', fontSize: 15 }}>Add</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  input: {
    padding: 10,
    height: 50,
    width: '90%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 20,
  },
  inputsContainer: {
    height: '70%',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  image: {
    height: 150,
    width: 150,
  },
  menu: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
    width: 80,
    height: 30,
    justifyContent: 'center',
  },
});
