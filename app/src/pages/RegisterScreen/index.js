import React, { useState } from 'react';
import { TouchableOpacity, Keyboard } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Left, Title, Form, Input, BorderInput, RegisterButton, RegisterButtonText } from './styles';

export default function RegisterScreen() {
  const [name, setName] = useState('')
  const [userEmail, setEmail] = useState('')
  const [userPassword, setPassword] = useState('')
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

  async function handleRegister() {
    await registerUser()

    setName('')
    setEmail('')
    setPassword('')
    Keyboard.dismiss()
    navigateToHome()

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
          value={name}
          onChangeText={setName}
          autoCorrect={false}
          placeholder='Nome:'
          />
        <BorderInput />
        
        <Input
          value={userEmail}
          onChangeText={setEmail}
          autoCorrect={false}
          placeholder='Email:'/>
        <BorderInput />

        <Input
          secureTextEntry={true}
          password={true}
          value={userPassword}
          onChangeText={setPassword}
          autoCorrect={false}
          placeholder='Senha:'/>
        <BorderInput />
      
        <RegisterButton onPress={handleRegister}>
          <RegisterButtonText>CADASTRAR</RegisterButtonText>
        </RegisterButton>

      </Form>

    </Container>
  );
}
