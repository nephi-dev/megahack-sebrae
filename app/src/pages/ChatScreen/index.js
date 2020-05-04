import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import Image from '../../assets/profile.jpg'

import { Container, Header, LeftIcon, Title, MarkAdate, ChatMenssagensBar, MarkAdateText, ChatBarTop, ChatBar, ProfileImage, ProfileName, ChatMenssagens, ChatMenssagensText, ChatInputBar, ChatInput, ChatInputSendButton, ChatInputSendButtonText } from './styles';

export default function ChatScreen() {
  return (
    <Container>
      <Header>
        <LeftIcon>
          <AntDesign name="left" size={20} color="#000"/>
        </LeftIcon>

        <Title>Chat</Title>
      </Header>

      <ChatBar>
        <ChatBarTop>
          <ProfileImage source={Image} />
          <ProfileName>Art&Cia</ProfileName>
        </ChatBarTop>

        <ChatMenssagensBar
        data={[1,2,3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={item => String(item)}
        renderItem={( item ) => ( 
          <ChatMenssagens>
            <ProfileImage source={Image} />
            <ChatMenssagensText>Muito bom, uma estrela</ChatMenssagensText>
          </ChatMenssagens>

        )} />
          
        
        
        <ChatInputBar>
          <ChatInputSendButton>
            <ChatInputSendButtonText>Contratar</ChatInputSendButtonText>
          </ChatInputSendButton>


          <ChatInputSendButton>
            <ChatInputSendButtonText>Chat privado</ChatInputSendButtonText>
          </ChatInputSendButton>
          

        </ChatInputBar>

      </ChatBar>

    </Container>
  );
}
