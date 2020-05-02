import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Left = styled.TouchableOpacity`
  margin-top: 35px;
`;

export const Title = styled.Text`
  margin-top: 40%;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const Form = styled.View`
    margin: 27px;
`;

export const Input = styled.TextInput`
    font-size: 18px;
    color: #777777;
    margin-bottom: 15px;
`;

export const BorderInput = styled.View`
    border: 0.2px;
    margin-top: -12px;
    margin-bottom: 23px;
    border-color: #77777777;
`;

export const RegisterButton = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #42B6FF;
    border-radius: 5px;
    width: 100%;
    height: 40px;
`;

export const RegisterButtonText = styled.Text`
    text-align: center;
    font-size: 18px;
    margin-top: 6px;
    color: #FFFFFF;
`;