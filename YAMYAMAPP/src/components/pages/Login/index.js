import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {RadiusButton, Title} from '../../../components';
import * as S from './style';

export function Login({navigation}) {
  const wait = timeToDelay =>
    new Promise(resolve => setTimeout(resolve, timeToDelay));

  return (
    <S.Container>
      <S.Logo source={require('../../../assets/images/logo.png')} />
      <Title text={'YAMYAM과 함께할 당신은 누구인가요?'} size={'20px'} />
      <S.ButtonContainer>
        <RadiusButton
          text={'저는 아동이에요!'}
          onPress={() => {
            navigation.navigate('내 주변 식당 찾기');
          }}
        />
        <RadiusButton text={'저는 사장님 이에요!'} onPress={() => {}} />
      </S.ButtonContainer>
      <S.BackButton onPress={() => navigation.navigate('회원가입')}>
        <S.BackButtonText>뒤로가기</S.BackButtonText>
      </S.BackButton>
    </S.Container>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     position: 'absolute',
//     flex: 1,
//     justifyContent: 'center',
//   },
//   horizontal: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 10,
//   },
// });
