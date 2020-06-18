import React from 'react';
import { Image } from 'react-native';

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

    return (

    <Container>
        <Image source={logo} />

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

        <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>Ja tenho conta</SignLinkText>
        </SignLink>
    </Container>
    
    );
}