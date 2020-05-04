import styled from 'styled-components/native';

export const Container = styled.View`
  
`;

export const Header = styled.View`
  height: 80px;
  background-color: #FFCE45;
  flex-direction: row;
  padding-top: 40px;
`;

export const Left = styled.TouchableOpacity`
  
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const ContainerButtons = styled.View`
`;

export const ShowDatePicker = styled.TouchableOpacity`
  background-color: #222;
  padding: 10px;
  border: 1px;
  border-color: #FFCE45;
`;

export const ShowDatePickerText = styled.Text`
  text-align: center;
  font-size: 15px;
  color: #FFCE45;
`;

export const ComfirmButton = styled.TouchableOpacity`
  margin-top: 7px;
  margin-right: 80px;
  margin-left: 80px;
  border-radius: 10px;
  background-color: #FFCE45;
  padding: 10px;
  margin-bottom: 3px;
`;

export const ComfirmButtonText = styled.Text`
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #222;
`;

export const ScheduledList = styled.FlatList`
  margin-left: 20px;
  margin-right: 20px;
`;

export const ScheduledContainer = styled.TouchableOpacity`
  margin-bottom: 15px;
  padding: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
`;

export const ScheduledDate = styled.Text`
  color: #222;
  font-weight: bold;
  font-size: 15px;
`;

export const ScheduledName = styled.Text`
  
`;

export const ScheduledTitle = styled.Text`
  margin-left: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: bold;
`;