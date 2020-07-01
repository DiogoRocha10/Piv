import 'react-native-gesture-handler';
import * as React from 'react';

import { createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home/Home'
import Mapa from '../Mapa/index'
import FAQ from '../FAQ/index'
import InfoArq from '../InfoArq/index'
import Explicacao from '../Explicacao/index'
import Sobre from '../Sobre/index'
import diario from '../Diario/index'
import Chat from '../ChatBot/index'
import Meditacao from '../Meditacao';

/* Wannings Ignorados */
console.disableYellowBox=true

function MenuSide({ navigation }) {
  const superior = navigation
  const Drawer = createDrawerNavigator();
  return (

    // criando menu lateral no home
    <Drawer.Navigator initialRouteName="Home"

    //estilização do menu lateral
      hideStatusBar={false}
      drawerStyle={{
        backgroundColor: '#cca6dd',
        width: 240,
      }}
      drawerContentOptions={{
        activeTintColor: '#412c6b',
        inactiveTintColor: '#fff'   
      }}
    >
      {/* Componentes do menu lateral */}
      <Drawer.Screen name="Home" component={Home} initialParams={{ superior }} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="Diário" component={diario} />
      <Drawer.Screen name="Meditação" component={Meditacao} />
      <Drawer.Screen name="Chat" component={Chat} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Explicação" component={Explicacao} />
      <Drawer.Screen name="Arquitetura" component={InfoArq} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  )
}

export default function Menu() {
  const Stack = createStackNavigator();
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home"
          component={MenuSide}/>
      </Stack.Navigator>  
  );
}