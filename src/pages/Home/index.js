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
import SignIn from '../SignIn/index';

/* Wannings Ignorados */
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

function MenuSide({ navigation }) {
  const superior = navigation
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home"
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
      <Drawer.Screen name="Home" component={Home} initialParams={{ superior }} />
      <Drawer.Screen name="Mapa" component={Mapa} />
      <Drawer.Screen name="FAQ" component={FAQ} />
      <Drawer.Screen name="Explicação" component={Explicacao} />
      <Drawer.Screen name="Arquitetura" component={InfoArq} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      {/* <Drawer.Screen name="Sair" component={SignIn} /> */}
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