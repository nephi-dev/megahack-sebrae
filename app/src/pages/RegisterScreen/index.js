import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Left, Title, Form, Input, BorderInput, RegisterButton, RegisterButtonText } from './styles';

export default function RegisterScreen() {
  const navigation = useNavigation()

  function navigateToLogin() {
    navigation.navigate('Login')
  }

  function navigateToHome() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Left onPress={navigateToLogin}>
        <AntDesign name="left" size={20} color="#000"/>
      </Left>

      <Title>Cadastrar</Title>

      <Form>
        <Input 
          placeholder='Nome:'/>
        <BorderInput />
        
        <Input 
          placeholder='Email:'/>
        <BorderInput />

        <Input 
          placeholder='Senha:'/>
        <BorderInput />
      
        <RegisterButton onPress={navigateToHome}>
          <RegisterButtonText>CADASTRAR</RegisterButtonText>
        </RegisterButton>

      </Form>

    </Container>
  );
}
