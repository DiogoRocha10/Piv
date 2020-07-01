import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 10px;
    height: auto;
    background-color: #826dc7 ;
    border-radius: 5px;
    margin-bottom: 10px;
    flex-direction: row;
    align-items: center;
`;

export const Form = styled.View`
    align-self: stretch;
    margin-top: 10px;
`;

export const TInput = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255, 255, 255, 0.8)',
})`
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    color: #fff;
`;