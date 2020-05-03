import React from 'react';
import { AntDesign, Entypo, Ionicons, Foundation, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, View } from 'react-native';

import { Container, Header, Title, CategoryList, CategoryBar, BorderInput, CategoryTitle, IconCategoryBar } from './styles';

export default function NavbarScreen() {
  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function navigateToHomeWithFilter() {
    navigation.navigate('Home')
  }


  return (
    <Container>
      <Header>
          <TouchableOpacity onPress={navigateToHome}>
            <AntDesign name="left" size={20} color="#FFCE45"/>
          </TouchableOpacity>
          <Title>Categorias</Title>
      </Header>

        

      <CategoryList>

        <CategoryBar onPress={navigateToHomeWithFilter}>
          <Ionicons name="md-shirt" size={30} color="#FFCE45"/>

          <CategoryTitle>Moda</CategoryTitle>
       

        </CategoryBar>
        <BorderInput />

        <CategoryBar onPress={navigateToHomeWithFilter}>

          <Foundation name="torso-business" size={30} color="#FFCE45"/>

          <CategoryTitle>Marketing</CategoryTitle>
     

        </CategoryBar>
        <BorderInput />

        <CategoryBar onPress={navigateToHomeWithFilter}>

          <FontAwesome5  name="basketball-ball" size={26} color="#FFCE45"/>

          <CategoryTitle>Esportes</CategoryTitle>

        </CategoryBar>
        <BorderInput />

        <CategoryBar onPress={navigateToHomeWithFilter}>

          <MaterialCommunityIcons name="food-apple" size={30} color="#FFCE45"/>

          <CategoryTitle>Culinária</CategoryTitle>

        </CategoryBar>
        <BorderInput />


        <CategoryBar onPress={navigateToHomeWithFilter}>

          <MaterialCommunityIcons name="finance" size={26} color="#FFCE45"/>

          <CategoryTitle>Finanças</CategoryTitle>

        </CategoryBar>
        <BorderInput />

        <CategoryBar onPress={navigateToHomeWithFilter}>

          <Entypo name="language" size={26} color="#FFCE45"/>

          <CategoryTitle>Linguas</CategoryTitle>

        </CategoryBar>
        <BorderInput />

        
        

      </CategoryList>
      
    </Container>
  );
}
