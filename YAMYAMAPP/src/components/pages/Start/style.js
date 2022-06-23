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
`;

export const Bottom = styled.View`
  justify-content: center;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity``;

export const BackButtonText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #000000;
  text-decoration: underline;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const LoadingContainer = styled.View`
  width: 100%;
  height: 140%;
  position: absolute;
  top: -22%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
