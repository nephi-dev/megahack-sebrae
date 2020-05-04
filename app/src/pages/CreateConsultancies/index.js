import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { Container, Left, Title, Form, Input, BorderInput, RegisterButton, RegisterButtonText } from './styles';

export default function CreateConsultancies() {
    const [userId, setUserId] = useState(3)
    const [title, setTitle] = useState('aa')
    const [description, setDescription] = useState('aa')
    const [floatPrice, setFloatPrice] = useState(1)
    const [categoryId, setCategoryId] = useState(1)
    const [subCategoryId, setSubCategoryId] = useState(1)

    async function registerConsult() {
        const mainLink = 'https://mghack-apis.herokuapp.com/consultapi/'
        const response = await fetch(mainLink + `create_consult/${userId}/${title}/${description}/${floatPrice}/${categoryId}/${subCategoryId}`, {
        method: 'GET',
      
      })

      }

      const navigation = useNavigation()

      function navigateToProfile() {
        navigation.navigate('Profile')
      }

  return (
    <Container>
        <Left onPress={navigateToProfile}>
        <AntDesign name="left" size={20} color="#000"/>
      </Left>

      <Title>Criar nova consultoria</Title>

      <Form>
        <Input 
          placeholder='Titulo:'/>
        <BorderInput />
        
        <Input 
          placeholder='Descricao:'/>
        <BorderInput />

        <Input 
          placeholder='Valor:'/>
        <BorderInput />

        <Input 
          placeholder='Categoria:'/>
        <BorderInput />

        <Input 
          placeholder='Subcategoria:'/>
        <BorderInput />
      
        <RegisterButton onPress={registerConsult}>
          <RegisterButtonText>Criar</RegisterButtonText>
        </RegisterButton>

      </Form>

    </Container>
  );
}