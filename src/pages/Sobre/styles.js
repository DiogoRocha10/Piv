import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    background-color: black;
    align-items: center;
    justify-content: center;
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

export const SubmitButton = styled(Button)`
    width: 50%;
    background-color: #000000;
`;