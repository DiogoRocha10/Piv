import React, { useState } from 'react';
import { Image, Text } from 'react-native';

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
    
    const [mensagem, setMensagem] = useState("")
    const [email, setEmail] = useState("diogo@gmail.com")
    const [password, setPassword] = useState("123456")


    const validarLogin = () => {

        authService.login(email, password)
        .then(retorno => {
            navigation.replace('Home')
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
                    colors={['#fd883e', '#fd6b13', '#fd1145']}
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