import styled from 'styled-components/native';
// import {getStatusBarHeight } from 'react-native-status-bar-height'

export const Container = styled.View`
`;

export const Header = styled.View`
    background-color: #333533;
    height: 200px;
`;

export const Logo = styled.Text`
    text-align: center;
    color: #FFF246;
    font-weight: bold;
    font-size: 50px;
    margin-top: 70px;
`;

export const Title = styled.Text`
    margin-top: 20px;
    font-size: 20px;
    text-align: center;
`;

export const Description = styled.Text`
    margin-top: 3px;
    font-size: 13px;
    color: #444444;
    text-align: center;
`;

export const Form = styled.View`
    margin: 25px;
`;

export const Input = styled.TextInput`
    font-size: 18px;
    color: #777777;
    margin-bottom: 15px;
`;

export const LoginButtonView = styled.TouchableOpacity`
    margin-top: 10px;
    background-color: #42B6FF;
    border-radius: 5px;
    width: 100%;
    height: 40px;
`;


export const LoginButtonText = styled.Text`
    text-align: center;
    font-size: 18px;
    margin-top: 6px;
    color: #FFFFFF;


`;

export const BorderInput = styled.View`
    border: 0.2px;
    margin-top: -12px;
    margin-bottom: 23px;
`;

export const NewPasswordText = styled.Text`
    font-size: 14px;
    text-align: center;
    color: #42B6FF;

`;

export const Division = styled.View`
    margin-top: 20px;
    border: 0.2px solid #4444;
    margin-left: 30px;
    margin-right: 30px;

`;

export const RegisterButtonView = styled.TouchableOpacity`
    margin-top: 20px;
    background: #6DF892;
    border-radius: 5px;
    height: 33px;
    margin-left: 50px;
    margin-right: 50px;
`;

export const RegisterButtonText = styled.Text`
    color: #fff;
    text-align: center;
    margin-top: 6px;
`;
