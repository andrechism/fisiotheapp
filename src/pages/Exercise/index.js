import React from 'react';
import HandImage from '../../assets/hand.png';

import {View} from 'react-native';

import {
  Container,
  Image,
  TreatmentTitle,
  Table,
  TableColumn,
  TableTitle,
  TableText,
  Button,
  ButtonText,
} from './style';

function Exercise({navigation}) {
  return (
    <Container>
      <Image source={HandImage} />
      <TreatmentTitle>Close and open hands</TreatmentTitle>

      <Button
        onPress={function () {
          navigation.navigate('Main');
        }}>
        <View accessible accessibilityRole="button">
          <ButtonText>Dwone!</ButtonText>
        </View>
      </Button>

      <Table>
        <TableColumn>
          <TableTitle>Series</TableTitle>
          <TableText>3x</TableText>
        </TableColumn>

        <TableColumn>
          <TableTitle>Repetitions</TableTitle>
          <TableText>10</TableText>
        </TableColumn>

        <TableColumn>
          <TableTitle>Rest</TableTitle>
          <TableText>20 seg</TableText>
        </TableColumn>
      </Table>
    </Container>
  );
}

export default Exercise;
