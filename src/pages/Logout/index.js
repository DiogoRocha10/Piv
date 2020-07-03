import React, { useState, useEffect } from 'react';
import { Image, AsyncStorage, Text, StyleSheet, Alert} from 'react-native';
import Textarea from 'react-native-textarea'

import logo from '../../assets/logo.png';

import * as authService from '../../service/authService'
import {
    Container,
    Form,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';


export default function SignIn(props) {
    const { navigation } = props
    
    const [registro, setRegistro] = useState("")

    //Função para sair do app
    const Logout = () => {

        authService.logout()
        .then(retorno => {
            navigation.replace('SignIn')
        })
        .catch(erro => {
            alert(erro.message)
        })
    }

    const saveRegister= () => {
        let registrados = {
            registro: registro
        }
        AsyncStorage.setItem("registrados", JSON.stringify(registrados))
        setRegistro("")
        Alert.alert("Seu feedback foi salvo, muito obrigado!")
    }

    useEffect(() => {

        const inicializaDados = async () => {
          let registrados = JSON.parse(await AsyncStorage.getItem("registrados"))
          if (registrados) {
            setRegistro(registrados.registro)
            
          }
        }
        inicializaDados()

    }, [])


    return (
        <Container>
            <Image source={logo} />
            <Text>Deixe um Feedback!</Text>
            <Form>
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={text => setRegistro(text)}
                    value={registro}
                    maxLength={120}
                    placeholder={'Deixe um feedback!'}
                    placeholderTextColor={'#c7c7c7'}
                    underlineColorAndroid={'transparent'}
                />

                <SubmitButton
                onPress={saveRegister}> Registrar
                </SubmitButton>
            </Form>

            <SignLink onPress={Logout}>
                <SignLinkText>Sair</SignLinkText>
            </SignLink>
        </Container>

        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textareaContainer: {
      height: 180,
      padding: 5,
      backgroundColor: '#F5FCFF',
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 170,
      fontSize: 14,
      color: '#333',
    },
  });  