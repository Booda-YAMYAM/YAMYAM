//App.js

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Login} from './components';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

const DetailScreen = () => {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Home} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
