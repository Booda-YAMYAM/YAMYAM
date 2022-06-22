import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ffffff;
`;

export const Logo = styled.Image`
  margin-top: 50px;
  width: 50%;
  resize-mode: contain;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;
