import React, { useLayoutEffect} from 'react'
import { Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Container } from './styles'
import piv from '../../assets/Piv.png';

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
            <Image source={piv} />
        </Container>
        )
}