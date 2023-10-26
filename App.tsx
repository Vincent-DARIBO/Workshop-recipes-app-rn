import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RecepiesProvider from './src/providers/RecepiesProvider';
import { data as recepiesProvider } from './src/data/recepies';
import Home from './src/screens/Home';
import AddScreen from './src/screens/Add';
import MainStack from './src/navigation/MainStack';
import { Provider } from 'react-native-paper';

export default function App() {
  const [recepies, setRecepies] = React.useState(recepiesProvider.recepies);
  const [favorites, setFavorites] = React.useState([]);
  const [myRecepies, setMyRecepies] = React.useState([]);
  const value = {
    recepies,
    setRecepies,
    favorites,
    setFavorites,
    myRecepies,
    setMyRecepies,
  };
  return (
    <NavigationContainer>
      <Provider>
        <RecepiesProvider recepies={value}>
          <MainStack />
        </RecepiesProvider>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
