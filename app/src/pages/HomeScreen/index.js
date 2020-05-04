import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { FontAwesome5, EvilIcons} from '@expo/vector-icons'
import Image from '../../assets/profile.jpg'
import { useNavigation } from '@react-navigation/native'

import { Container, Header, PageTitle, ProfileBar, TextHorizontal, ProfileDescription, ProfileBarHorizontal, ProfileBarVertical, ProfileImage, ProfileName, SearchBar, SearchText, ServiceBar, ListVertical, ListHorizontal, CategoryTitle, ServicesBar, ServiceImage, ServicePrice, ServiceButton, ServiceButtonText } from './styles';

export default function HomeScreen() {

  const [data, setData] = useState([])
  const [categorys, setCategorys] = useState([])


  const [consultancyId, setConsultancyId] = useState(1)
  const [userId, setUserId] = useState(1)


  useEffect(() => {
    async function loadConsultancies() {
      const mainLink = 'https://mghack-apis.herokuapp.com/consultapi/'
      const response = await fetch(mainLink + `get_consultancies`, {
      method: 'GET',
      
      })
      .then(response => response.json())
      .then(response => {

      setData(response.consultancies)
      console.log(response);

      })
      }

    async function loadCategorys() {
      const mainLink = 'https://mghack-apis.herokuapp.com/consultapi/'
      const response = await fetch(mainLink + `get_categories`, {
      method: 'GET',
      
      })
      .then(response => response.json())
      .then(response => {

      setCategorys(response.categories)
      console.log(`oooo ${categorys}`);

      })
    }
    
      loadConsultancies()
    
  }, [])

  const navigation = useNavigation()

  function navigateToNavbarScreen() {
    navigation.navigate('Navbar')
  }

  function navigateToProfile() {
    navigation.navigate('Profile')
  }

  console.log(`${data}`);
  
  function navigateToChatScreen() {
    async function handlePreference() {
      const mainLink = 'https://mghack-apis.herokuapp.com/consultapi/'
      const response = await fetch(mainLink + `consult_clicked/${consultancyId}/${userId}`, {
      method: 'GET',
      
      })}

      handlePreference()

    navigation.navigate('Chat')
  }
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={navigateToNavbarScreen}>
         <FontAwesome5 name="bars" size={17} color="#000" style={{marginTop: 34, marginLeft: 10}}/>
        </TouchableOpacity>
        <PageTitle>Home</PageTitle>
      </Header>

      <ProfileBar onPress={navigateToProfile}>
        <ProfileBarHorizontal>
          <ProfileImage source={Image}/>

          <ProfileBarVertical>
            <ProfileName>Art&Cia</ProfileName>
            <ProfileDescription>Empresa a 10 anos no mercado, Dancarinos profissionais, pintura corporal, tecnicas de danca</ProfileDescription>
          </ProfileBarVertical>
        </ProfileBarHorizontal>
      </ProfileBar>

      <SearchBar>
        <SearchText 
          placeholder="O que procura?"
        />
        <TouchableOpacity>
          <EvilIcons name="search" size={25} color="#000"/>
        </TouchableOpacity>
      </SearchBar>

      <ListVertical 
        data={categorys}
        keyExtractor={item => String(item)}
        renderItem={( item ) => (
          <View>
            <CategoryTitle>Arts</CategoryTitle>
            
            <ListHorizontal 
            data={[1,2,3, 4, 5, 6, 7, 8, 9]}
            keyExtractor={item => String(item)}
            horizontal={true}
            renderItem={( item ) => (
              <ServicesBar onPress={navigateToChatScreen}>
                <ServiceImage source={Image} />
                  <ServiceButton>
                    <ServiceButtonText>Agendar</ServiceButtonText>
                    <ServicePrice>129.00$</ServicePrice>
                  </ServiceButton>
              </ServicesBar>

            )}
            />
          </View>
        )}
      />

      
    </Container>
  );
}
