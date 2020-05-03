import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #F0F0F5;
  flex: 1
`;


export const Header = styled.View`
  height: 70px;
  background-color: #333533;
  flex-direction: row;
  padding-top: 35px;
  padding-left: 5px;
`;

export const Title = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  margin-top: -3px;
  color: #FFCE45;
  font-weight: bold;
`;

export const CategoryList = styled.View`
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 10px;
`

export const BorderInput = styled.View`
    border: 0.2px;
    margin-top: -12px;
    margin-bottom: 23px;
    border-color: #FFCE45;
`;

export const CategoryBar = styled.TouchableOpacity`
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const IconCategoryBar = styled.View`
`;

export const CategoryTitle = styled.Text`
  font-size: 19px;
  margin-top: 2px;
  margin-left: 10px;
  color: #FFCE45;
  margin-bottom: 10px;
`;