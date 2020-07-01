import React from 'react'

import { StyleSheet, Image} from 'react-native'
import { Container, Form, TextoSobre } from './styles'

export default function InfoArq() {
    return (
        <Container>
            {/* texto explicativo */}
            <TextoSobre>{`
    A arquitetura do projeto 
consta com o arquivo App.js 
dando início ao projeto, dentro 
da pasta src temos o backend 
conectando o firebase, os 
componentes do projeto, as 
telas dentro da pasta pages 
e os serviços dentro da pasta 
service, cada tela tem dois 
arquivos, o index que tem a 
estrutura e o styles que tem a 
parte de design de cada tela.
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



