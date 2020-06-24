import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
    enabled: Platform.OS === 'ios',
    behavior: 'padding',
})`
    flex: 1;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 50px;
`;

export const SubmitButton = styled(Button)`
    margin-top: 5px;
`;