import React, { useState } from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';
import { LinearGradient } from 'expo-linear-gradient';

import * as authService from '../../service/authService'
import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';


export default function SignIn(props) {
    const { navigation } = props
    
    const [email, setEmail] = useState("diogo@gmail.com")
    const [password, setPassword] = useState("123456")

    //Função para validar o login pegando o serviço do back
    const validarLogin = () => {

        authService.login(email, password)
        .then(retorno => {
            navigation.replace('Home')
        })
        .catch(erro => {
            alert(erro.message)
        })
    }

    return (
        <Container>
            <Image source={logo} />

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
                <SubmitButton
                onPress={validarLogin}> Acessar
                </SubmitButton>
            </Form>

            <SignLink onPress={() => navigation.navigate('SignUp')}>
                <SignLinkText>Criar conta gratuita</SignLinkText>
            </SignLink>
        </Container>

        
    );
}