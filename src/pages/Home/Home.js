import React, { useLayoutEffect} from 'react'
import { Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Container } from './styles'

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
            <Text>Screen Home </Text>
        </Container>
    )
}
