import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    background-color: #000000;
    margin-top: 50px;
`;

export const Form = styled.View`
    justify-content: center;
    align-items: center;
    padding: 0 30px;

`;

export const TextoSobre = styled.Text`
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #fff; 
`;