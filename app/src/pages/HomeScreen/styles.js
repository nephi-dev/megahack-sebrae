import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Header = styled.View`
  height: 70px;
  background-color: #FFF246;
  flex-direction: row;
`;

export const PageTitle = styled.Text`
  color: #000;
  margin-top: 30px;
  font-size: 18px;
  margin-left: 10px;
`;

export const ProfileBar = styled.View`
  margin: 30px;
`;

export const ProfileBarHorizontal = styled.View`
  flex-direction: row;
  
`;

export const ProfileBarVertical = styled.View`
  margin-left: 10px;
  margin-right: 90px;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const ProfileName = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;

export const ProfileDescription = styled.Text`
  color: #222;
  font-size: 12px;
`;

export const SearchBar = styled.View`
    margin-left: 30px;
    margin-right: 30px;
    flex-direction: row;
    justify-content: space-between;
`;

export const SearchText = styled.TextInput`
  
`;

export const ServicesBar = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 20px;
    margin-right: 20px;
`;

export const ListVertical = styled.FlatList.attrs({
    contentContainerStyle: { paddingHorizontal: 20 },
    showsVerticalScrollIndicator: false,
})`
    background-color: #F0F0F5;
    margin-top: 10px;
    margin-bottom: 250px;
`;

export const ListHorizontal = styled.FlatList.attrs({
    showsHorizontalScrollIndicator: false,
})`

`;

export const CategoryTitle = styled.Text`
  font-size: 18px;
`;

export const ServiceImage = styled.Image`
  height: 120px;
  width: 130px;
`;

export const ServicePrice = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const ServiceButton = styled.View`
  background-color: #42B6FF;
  flex-direction: row;
  justify-content: space-between;
`;


export const ServiceButtonText = styled.Text`
    color: #fff;
    font-size: 12px;
    margin-left: 5px;
  
`;



