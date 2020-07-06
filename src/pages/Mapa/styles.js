import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import { RectButton } from 'react-native-gesture-handler'

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

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 100px;
  padding: 0px;
  height: 50px;
  width: 30%;
`;