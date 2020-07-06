import React, { useState} from 'react';
import { Image, StyleSheet, Alert, Keyboard} from 'react-native';
import Textarea from 'react-native-textarea'
import {firebase} from '../../backend/firebase'

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
    
    const [novoRegistro, setNovoRegistro] = useState("")

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

    //salvar os registros no banco
    async function saveRegister(){
        if(novoRegistro !== ''){
  
          let feedback = await firebase.database().ref('feedback')
          let chave = feedback.push().key
  
          feedback.child(chave).set({
            feedback: novoRegistro
          })
  
          Keyboard.dismiss();
          setNovoRegistro('')
          Alert.alert("Seu feedback foi salvo, obrigado!")
        }
      }


    return (
        <Container>
            <Image source={logo} />
            <Form>
                <Textarea
                    containerStyle={styles.textareaContainer}
                    style={styles.textarea}
                    onChangeText={text => setNovoRegistro(text)}
                    value={novoRegistro}
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