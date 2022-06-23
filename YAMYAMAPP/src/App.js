//App.js

import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, Login} from './components';
import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();

function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="내 주변 식당 찾기" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
