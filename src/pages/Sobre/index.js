import React, {useCallback} from 'react'
import { StyleSheet, Linking, Image, Alert, Button} from 'react-native'
import Perfil from '../../assets/perfil.jpg'
import { Container, Form, TextoSobre} from './styles'

export default function Sobre() {
    //Variaveis com os links
    const facebook = "https://www.facebook.com/diogo.rocha.1042/"
    const twitter = "https://twitter.com/Diogo99R"
    const instagram = "https://www.instagram.com/diogo_rochaaa/?hl=pt-br"
    const github = "https://github.com/DiogoRocha10"

    //Função que pega a url cria um link e retorna no botão
    const OpenURL = ({ url, children }) => {
        const handlePress = useCallback(async () => {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                Alert.alert(`Impossivel abrir URL : ${url}`)
            }
        }, [url]);
        return <Button color="black" title={children} onPress={handlePress} />
    }

    return (
        <Container>
            {/* Imagem com a foto de perfil */}
            <Form>
                <Image style={styles.img} source={Perfil} />
            </Form>

            {/* Texto fixado sobre o desenvolvedor */}
            <TextoSobre>{`
    Diogo Rocha\n
    19 anos\n
    5º Semestre
    Computação
    IMED\n
    Desenvolvedor
    Front-End
    Compasso Uol\n
    `}
            </TextoSobre>

            {/* Botões com os links */}
            <OpenURL url={facebook}>Facebook</OpenURL>
            <OpenURL url={twitter}>Twitter</OpenURL>
            <OpenURL url={instagram}>Instagram</OpenURL>
            <OpenURL url={github}>GitHub</OpenURL>
        </Container>
    )
}


const styles = StyleSheet.create({
    img: {
        height: 100,
        width: 100,
        borderRadius: 100
    }
});

