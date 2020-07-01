import React from 'react';
import 'react-native-gesture-handler'

import SignIn from './src/pages/SignIn/index'
import SignUp from './src/pages/SignUp/index'
import Home from './src/pages/Home/index'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//Configurando Encondig ===============
import { decode, encode } from 'base-64'
if (!global.btoa) {
  global.btoa = encode
}
if (!global.atob) {
  global.atob = decode
}
//==================================


export default function App() {
  const Stack = createStackNavigator();

  return (
    //Container principal de login, criar conta e home
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false
          }}

        />
        <Stack.Screen
          name="Home" component={Home}
          options={{
            headerShown: false
          }}  
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


