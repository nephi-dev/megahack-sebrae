import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Logo, Title, Description, Form, Input, LoginButtonView, LoginButtonText, NewPasswordText, Division, RegisterButtonView, RegisterButtonText, BorderInput } from './styles';
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
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
          placeholder="Email:"
        />
        <BorderInput />

        <Input 
          placeholder="Senha:"
        />
        <BorderInput />


        <LoginButtonView onPress={navigateToHomeScreen}>
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
