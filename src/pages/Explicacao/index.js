import React from 'react'

import { StyleSheet, TouchableOpacity, Image} from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import { Container, Form, TextoSobre } from './styles'
import expo from '../../assets/expo.png'
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Explicacao(props) {
    const { navigation } = props

    return (
        <Container>
            <TouchableOpacity>
                <Icon name="reorder" size={50} color="#fff" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
            </TouchableOpacity>
            <Form>
                <Image style={styles.img} source={expo} />
            </Form>
            <TextoSobre>{`
    Foi usado Expo no projeto: 

    1º: por ter facilidade de 
    configurar e instalar 
    bibliotecas. 

    2º: porque a ferramenta 
    facilita a vida de quem está 
    iniciando com react native.
    
    3º: porque o ambiente de 
    testes e resolução de erros 
    no expo é muito prático e de 
    bom entendimento.
                `}
            </TextoSobre>
        </Container>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 200
    }
})
