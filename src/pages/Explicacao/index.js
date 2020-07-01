import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Container, Content, Accordion} from "native-base";
import { Form } from './styles'
import expo from '../../assets/expo.png'

export default function Explicacao() {
    const dataArray = [
        { title: "1º", content: "por ter facilidade de configurar e instalar bibliotecas." },
        { title: "2º", content: "porque a ferramenta facilita a vida de quem está iniciando com react native." },
        { title: "3º", content: "porque o ambiente de testes e resolução de erros no expo é muito prático e de bom entendimento." }
        ];

    return (
        <Container>
            {/* logo do expo png */}
            <Form>
                <Image style={styles.img} source={expo} />
            </Form>
            <Content padder>
                <Accordion dataArray={dataArray} icon="add" expandedIcon="remove" />
            </Content>
           
        </Container>
    )
}

const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 200
    }
})



