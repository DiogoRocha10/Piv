import React from 'react';
import 'react-native-gesture-handler'

import LoginTeste from './LoginTeste'
import Teste from   './Teste'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="LoginTeste" component={LoginTeste} />
        <Drawer.Screen name="Teste" component={Teste} />
      </Drawer.Navigator>
  );
}