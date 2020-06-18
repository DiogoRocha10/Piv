import React from 'react';
import 'react-native-gesture-handler'

import Login from './src/pages/SignIn/index'
import NewAccount from './src/pages/SignUp/index'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" >
        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}

        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}


