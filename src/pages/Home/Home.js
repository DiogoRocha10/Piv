import React, { useLayoutEffect} from 'react'
import { StyleSheet, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Container } from './styles'
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/logo.png';

export default function Home({ navigation, route }) {
    const superior = route.params.superior

    //pegando header padrão       
    useLayoutEffect(() => {
        superior.setOptions({
            title: 'PIV',
            headerLeft: () => (
                <Entypo
                    name="menu"
                    size={24}
                    color="black"
                    onPress={() => navigation.openDrawer()}
                    style={{ marginLeft: 20 }}
                />
            ),
        });
    }, []);
    

    return (
        <Container>
            <Animatable.Text
            style={styles.texto} 
            animation="slideInUp" 
            terationCount={10} 
            duration={5000}
            direction="alternate">Seja Bem vindo ao</Animatable.Text>
            <Image source={logo} />
        </Container>
        )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        color: '#fff'
    }
});

