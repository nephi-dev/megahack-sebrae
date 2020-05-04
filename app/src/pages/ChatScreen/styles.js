import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #F0F0F5;
`;

export const Header = styled.View`
  height: 70px;
  flex-direction: row;
  padding-top: 35px;
  padding-left: 10px;
  background-color: #FFCE45;
`;

export const LeftIcon = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-size: 18px;
  margin-top: -3px;
`;

export const ChatBar = styled.View`
  background-color: #fff;
  margin: 20px;
  border-radius: 20px;
  padding: 10px;
  border: 0.1px;


`;

export const ChatBarTop = styled.View`
  flex-direction: row;
`;

export const ProfileImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 200px;
`;

export const ProfileName = styled.Text`
  margin-top: 5px;
  margin-left: 10px;
  font-size: 17px;
  font-weight: bold;
`;

export const ChatMenssagens = styled.View`
  margin-top: 10px;
  border-radius: 5px;
  
  padding-top: 10px;
  padding-left: 20px;
  flex-direction: row;


`;


export const ChatMenssagensBar = styled.FlatList`
  border-radius: 5px;
  border: 0.1px;
  margin-top: 15px;
  height: 65%;
  
`;



export const ChatMenssagensText = styled.Text`
  text-align: right;
  padding: 20px;
  
`;

export const ChatInputBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 15px;
`;

export const ChatInput = styled.TextInput`
  
`;

export const ChatInputSendButton = styled.TouchableOpacity`
    padding: 5px;
    border-radius: 5px;
    
    
`;

export const ChatInputSendButtonText = styled.Text`
`;

export const MarkAdate = styled.TouchableOpacity`
  left: -60px;
  margin-top: 30px;
`;

export const MarkAdateText = styled.Text`

  color: green;
`;