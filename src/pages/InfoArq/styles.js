import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    background-color: #ffffff;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;