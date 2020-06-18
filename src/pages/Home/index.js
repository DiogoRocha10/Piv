import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import {Container, SubmitButton, Form} from './styles';


export default function Home(props) {
    const { navigation } = props

    return (
        <Container>
            <Image source={logo} />
            <Form>
                <SubmitButton 
                onPress={() => navigation.navigate('SignIn')}>
                    Sair
                </SubmitButton>
            </Form>
        </Container>
      
    );
}