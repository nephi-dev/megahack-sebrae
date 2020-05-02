import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

import { Container, Left, Title, Form, Input, BorderInput, RegisterButton, RegisterButtonText } from './styles';

export default function RegisterScreen() {
  return (
    <Container>
      <Left>
        <AntDesign name="left" size={17} color="#000"/>
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
      
        <RegisterButton>
          <RegisterButtonText>CADASTRAR</RegisterButtonText>
        </RegisterButton>

      </Form>

    </Container>
  );
}
