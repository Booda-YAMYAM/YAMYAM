import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 80%;
  height: 30%;
  psition: absolute;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffe082;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const InPut = styled.TextInput`
  width: 80%;
  height: 30%;
  border-radius: 10px;
  border-width: 1px;
  border-color: #ffe082;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;
