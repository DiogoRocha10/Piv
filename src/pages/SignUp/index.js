import React, { useState } from 'react';
import { Image, Text } from 'react-native';

import * as authService from '../../service/authService'

import { LinearGradient } from 'expo-linear-gradient';
import logo from '../../assets/logo.png';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp(props) {
    const { navigation } = props

    const [mensagem, setMensagem] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const createUser = () => {

        authService.saveUser(email, password)
        .then(retorno => {
            setMensagem("Usuário Cadastrado")
            setEmail("")
            setName("")
            setPassword("")
        })
        .catch(erro => {
            setMensagem(erro.message)
        })
    }

    return (

    <Container>
        <Image source={logo} />
        <Text>{mensagem}</Text>
        <Form>
            <LinearGradient
                colors={['#a58fd2', '#f8c0ea', '#cca6dd']}
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 400,
                }}
                />
            <FormInput
                icon="person-outline"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome completo"
                value={name}
                onChangeText={texto => setName(texto)}
            />
            <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                value={email}
                onChangeText={texto => setEmail(texto)}
                
            />
            <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Sua senha secreta"
                value={password}
                onChangeText={texto => setPassword(texto)}        
            />
            <SubmitButton onPress={createUser}>
                Criar conta
            </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Ja tenho conta</SignLinkText>
        </SignLink>
    </Container>
    
    );
}