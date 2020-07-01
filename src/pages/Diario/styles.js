import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    padding: 0 30px;
    background-color: #cca6dd;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 35px;
`;

export const FormInput = styled(Input)`
    margin-bottom: 0px;
`;

export const SubmitButton = styled(Button)`
    margin: 10px;
`;
