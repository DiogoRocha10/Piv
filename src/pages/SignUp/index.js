import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import {
    Container,
    Form,
    FormInput,
    SubmitButton,
    SignLink,
    SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {

    return (

    <Container>
        <Image source={logo} />

        <Form>
            <FormInput
                icon="person-outline"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Nome completo"
                
            />
            <FormInput
                icon="mail-outline"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Digite seu e-mail"
                
            />
            <FormInput
                icon="lock-outline"
                secureTextEntry
                placeholder="Sua senha secreta"
                
            />
            <SubmitButton>
                Criar conta
            </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Login')}>
            <SignLinkText>Ja tenho conta</SignLinkText>
        </SignLink>
    </Container>
    
    );
}
