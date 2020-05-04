import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Left, Title, Form, Input, BorderInput, RegisterButton, RegisterButtonText } from './styles';

export default function RegisterScreen() {
  const [name, setName] = useState('aa')
  const [userEmail, setEmail] = useState('aa')
  const [userPassword, setPassword] = useState('aa')
  const [businessName, setBusinessName] = useState('aa')
  const [state, setState] = useState('aa')
  const [city, setCity] = useState('aa')
  const [imageLink, setImageLink] = useState('aa')

  

  async function registerUser() {
    const mainLink = 'https://mghack-apis.herokuapp.com/usersapi/'
    const response = await fetch(mainLink + `create_user/${name}/${businessName}/${userEmail}/${userPassword}/${state}/${city}/${imageLink}`, {
    method: 'GET',
    });
  }


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
      
        <RegisterButton onPress={registerUser}>
          <RegisterButtonText>CADASTRAR</RegisterButtonText>
        </RegisterButton>

      </Form>

    </Container>
  );
}
