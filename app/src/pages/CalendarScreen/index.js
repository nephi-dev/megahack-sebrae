import React, {useState} from 'react';
import { View, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons'


import { Container, Header, Left, Title, ComfirmButton, ScheduledTitle, ComfirmButtonText ,ContainerButtons, ShowDatePicker, ShowDatePickerText, ScheduledList, ScheduledContainer, ScheduledDate, ScheduledName } from './styles';

export default function CalendarScreen() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  return (
    <Container>
      <Header>
        <Left>
          <AntDesign name="left" size={25} color="#000"/>
        </Left>
        <Title>Contratar</Title>
      </Header>

      <ContainerButtons>
        <ShowDatePicker onPress={showDatepicker}>
          <ShowDatePickerText>Escolher a data</ShowDatePickerText>
        </ShowDatePicker>

        <ShowDatePicker onPress={showTimepicker}>
          <ShowDatePickerText>Escolher hora</ShowDatePickerText>
        </ShowDatePicker>

        <ComfirmButton>
          <ComfirmButtonText>Confirmar pedido</ComfirmButtonText>
        </ComfirmButton>
      </ContainerButtons>

      <ScheduledTitle>Agendamentos:</ScheduledTitle>
      <ScheduledList 
      data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}
      keyExtractor={item => String(item)}
      renderItem={( item ) => (

        <ScheduledContainer>
          <ScheduledDate>Dia: 28/05/2020</ScheduledDate>
          <ScheduledName>Jose Amauricio Ciclano</ScheduledName>
        </ScheduledContainer>

      )}
      />
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

    </Container>
  );
}
