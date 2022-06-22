import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 30%;
  height: 20px;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${props => (!props.isPress ? '#ffc107' : '#fff')};
  background-color: ${props => (props.isPress ? '#ffe082' : '#fff')};
  border-radius: 25px;
`;

export const Text = styled.Text`
  font-size: 12px;
  color: ${props => (props.isPress ? 'white' : '#ffe082')};
`;
