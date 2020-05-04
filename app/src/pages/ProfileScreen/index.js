import React from 'react';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Image from '../../assets/profile.jpg'
import { useNavigation } from '@react-navigation/native'

import { Container, Header, IconLeft, BorderInput, TitleHeader, ProfileBar, ProfileImage, ProfileInfosBar, ProfileInfosHorizontal, ProfileInfoIcon, ProfileInfosVertical, ProfileInfoTitle, ProfileInfoText, UpdateButton, UpdateButtonText, AddServicesButton, AddServicesButtonText, ServicesBar, ServiceTitle, ServicesItemsBar, ServicesItemsBarHorizontal, ServiceImage, ServicesItemsBarVertical, ServicesTitle, ServiceDescription } from './styles';

export default function ProfileScreen() {
  const navigation = useNavigation()

  function navigateToHome() {
    navigation.navigate('Home')
  }

  function navigateToConsultancies() {
    navigation.navigate('Consultancies')
  }

  
  return (
    <Container>
      <Header>
        <IconLeft onPress={navigateToHome}>
          <AntDesign name="left" size={20} color="#000"/>
        </IconLeft>
        <TitleHeader>Perfil</TitleHeader>
      </Header>

      <ProfileBar>
        <TouchableOpacity>
          <ProfileImage source={Image}/>
        </TouchableOpacity>

        <ProfileInfosBar>
          <ProfileInfosHorizontal>

            <ProfileInfoIcon>
              <AntDesign name="user" size={20} color="#000"/>
            </ProfileInfoIcon>

              <ProfileInfosVertical>
                <ProfileInfoTitle>Nome</ProfileInfoTitle>
                <ProfileInfoText placeholder="Art&Cia"/>
              </ProfileInfosVertical>

          </ProfileInfosHorizontal>
        </ProfileInfosBar>


        <ProfileInfosBar>
          <ProfileInfosHorizontal>

            <ProfileInfoIcon>
              <AntDesign name="user" size={20} color="#000"/>
            </ProfileInfoIcon>

              <ProfileInfosVertical>
                <ProfileInfoTitle>Descricao</ProfileInfoTitle>
                <ProfileInfoText placeholder="Empresa a 10 anos no mercado, Dancarinos profissionais, pintura corporal, tecnicas de danca"/>
              </ProfileInfosVertical>

          </ProfileInfosHorizontal>

          <UpdateButton>
            <UpdateButtonText>Atualizar Perfil</UpdateButtonText>
          </UpdateButton>
          <BorderInput />
        </ProfileInfosBar>


      </ProfileBar>

      <AddServicesButton>
        <AddServicesButtonText onPress={navigateToConsultancies}>Adicionar novo serviços</AddServicesButtonText>
      </AddServicesButton>

      <ServicesBar>
        <ServicesTitle>Meus serviços</ServicesTitle>

        <ServicesItemsBar
        data={[1,2,3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={item => String(item)}
        horizontal={true}
        renderItem={( item ) => (

          <ServicesItemsBarHorizontal>
            <ServiceImage source={Image} />

            <ServicesItemsBarVertical>
              <ServiceTitle>Aula de violao</ServiceTitle>
              {/* <ServiceDescription>Aula de violao ao vivo</ServiceDescription> */}
            </ServicesItemsBarVertical>
          </ServicesItemsBarHorizontal>

        )}
          />
      </ServicesBar>
    </Container>
  );
}
