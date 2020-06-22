import React from 'react';

import Home from './Home'
import Mapa from   '../Mapa/index'
import SignIn from '../SignIn/index'
import InfoArq from '../InfoArq/index'
import Sobre from '../Sobre/index'
import Explicacao from '../Explicacao/index'
import FAQ from '../FAQ/index'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#fff',
        width: 240,
      }}
    >
      <Drawer.Screen 
      name="Home" 
      component={Home}
      />
      <Drawer.Screen 
      name="Mapa" 
      component={Mapa} 
      />
      <Drawer.Screen 
      name="FAQ" 
      component={FAQ} 
      />
      <Drawer.Screen 
      name="Arquitetura" 
      component={InfoArq} 
      />
      <Drawer.Screen 
      name="Explicação" 
      component={Explicacao} 
      />
      <Drawer.Screen 
      name="Sobre" 
      component={Sobre} 
      />
      <Drawer.Screen 
      name="Sair" 
      component={SignIn} 
      />
    </Drawer.Navigator>     
  );
}