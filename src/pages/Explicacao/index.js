import React from 'react'

import { StyleSheet, Image} from 'react-native'
import { Container, Form, TextoSobre } from './styles'
import expo from '../../assets/expo.png'

export default function Explicacao() {
    return (
        <Container>
            {/* logo do expo png */}
            <Form>
                <Image style={styles.img} source={expo} />
            </Form>

            {/* texto explicativo */}
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



