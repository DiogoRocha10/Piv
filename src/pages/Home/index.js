import React from 'react';

import Home from './Home'
import Mapa from   '../Mapa/index'
import SignIn from '../SignIn/index'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Sair" component={SignIn} />
    </Drawer.Navigator>     
  );
}