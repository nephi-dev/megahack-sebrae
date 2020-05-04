import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Header = styled.View`
  height: 60px;
  background-color: #FFCE45;
  flex-direction: row;
  padding-top: 30px;
`;

export const IconLeft = styled.TouchableOpacity`
  margin-left: 4px;
`;

export const TitleHeader = styled.Text`
  font-size: 18px;
  margin-top: -3px;
  margin-left: 7px;

`;

export const ProfileBar = styled.View`
  margin: 5px;
`;

export const ProfileImage = styled.Image`
  margin-top: 20px;
  height: 150px;
  width: 150px;
  border-radius: 100px;
  align-self: center;
`;

export const ProfileInfosBar = styled.View`
  margin-left: 10px;
  
`;

export const ProfileInfosHorizontal = styled.View`
  flex-direction: row;
`;

export const ProfileInfoIcon = styled.View`
  margin-right: 10px;
`;

export const ProfileInfosVertical = styled.View`
  margin-bottom: 10px;
`;


export const ProfileInfoTitle = styled.Text`
  margin-top: -2px;
  font-weight: bold;
`;


export const ProfileInfoText = styled.TextInput`
`;

export const UpdateButton = styled.TouchableOpacity`
`;

export const UpdateButtonText = styled.Text`

`;


export const BorderInput = styled.View`
    border: 0.5px;
    margin-top: 5px;
    border-color: #FFCE45;
    margin-top: 15px;
`;

export const AddServicesButton = styled.TouchableOpacity`
  align-self: center;
  margin-top: 10px;
  background-color: #FFCE45;
  padding: 8px;
  border-radius: 10px;
`;


export const AddServicesButtonText = styled.Text`
  font-weight: bold;
`;

export const ServicesBar = styled.View`
  margin-left: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ServicesTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ServicesItemsBar = styled.FlatList.attrs({
    showsVerticalScrollIndicator: false,
})`
  
`;

export const ServicesItemsBarHorizontal = styled.View`
  
`;


export const ServiceImage = styled.Image`
  width: 100px;
  height: 100px;
  margin-top: 5px;
`;

export const ServicesItemsBarVertical = styled.View`
  margin-right: 25px;
`;


export const ServiceTitle = styled.Text`
  font-weight: bold;
`;

export const ServiceDescription = styled.Text`
  
`;






