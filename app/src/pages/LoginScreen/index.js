import React, { useState } from 'react';
import { TouchableOpacity, Keyboard, Alert } from 'react-native';
import { Container, Header, Logo, Title, Description, Form, Input, LoginButtonView, LoginButtonText, NewPasswordText, Division, RegisterButtonView, RegisterButtonText, BorderInput } from './styles';
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [permission, setPermission] = useState(true)

  async function loadAccount() {
      const mainLink = 'https://mghack-apis.herokuapp.com/usersapi/'
      const response = await fetch(mainLink + `login/${email}/${password}`, {
      method: 'GET',
      
      })
      .then(response => response.json())
      .then(response => {

      console.log(response)
      setPermission(response.can_login)
      console.log(`oooooo ${permission}`);

      })

  }

  async function handleLogin() {


    if (permission === true) {
      
      setEmail('')
      setPassword('')
      Keyboard.dismiss()
      navigateToHomeScreen()
    } else {
      Alert.alert('Senha ou email incorretos')
    }

    

  }

  const navigation = useNavigation()

  function navigateToRegisterScreen() {
    navigation.navigate('Register')
  }

  function navigateToHomeScreen() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Header>
        <Logo>Beezuu</Logo>
      </Header>

      <Title>Entrar</Title>
      <Description>Registre-se para aproveitar todos os recursos</Description>
      <Description>do aplicativo</Description>

      <Form>
        <Input 
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          placeholder="Email:"
        />
        <BorderInput />

        <Input 
          secureTextEntry={true}
          password={true}
          value={password}
          onChangeText={setPassword}
          autoCorrect={false}
          placeholder="Senha:"
        />
        <BorderInput />


        <LoginButtonView onPress={handleLogin}>
          <LoginButtonText>ENTRAR</LoginButtonText>
        </LoginButtonView>
      </Form>

      <TouchableOpacity>
        <NewPasswordText>ESQUECEU A SENHA?</NewPasswordText>
      </TouchableOpacity>

      <Division />

      <RegisterButtonView onPress={navigateToRegisterScreen}>
        <RegisterButtonText>CRIAR UMA NOVA CONTA</RegisterButtonText>
      </RegisterButtonView>

    </Container>
  );
}
