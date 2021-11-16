import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.Image``;

export const TreatmentTitle = styled.Text`
  font-family: 'Actor-Regular';
  font-weight: 400;
  font-size: 30px;
  letter-spacing: -0.1px;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 51px;
`;

export const Button = styled(RectButton)`
  height: 48px;
  border-radius: 4px;
  background-color: #5b3fff;
  max-width: 280px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
`;

export const ButtonText = styled.Text`
  font-family: 'Actor-Regular';
  font-weight: 400;
  font-size: 30px;
  text-align: center;
  color: #ffffff;
`;

export const Table = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 74px;
`;

export const TableColumn = styled.View`
  width: 33.33%;
  align-items: center;
`;

export const TableTitle = styled.Text`
  font-family: 'ABeeZee-Regular';
  font-weight: 400;
  font-size: 25px;
  color: #938989;
  text-align: center;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TableText = styled.Text`
  font-family: 'ABeeZee-Regular';
  font-weight: 400;
  font-size: 25px;
  align-items: center;
  color: #9e2d8c;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
