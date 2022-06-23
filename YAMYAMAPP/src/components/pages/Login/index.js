import React, {useEffect} from 'react';
import {View, Text, Image, ActivityIndicator, StyleSheet} from 'react-native';
import {RadiusButton} from '../..';
import * as S from './style';

export function Login({navigation}) {
  const wait = timeToDelay =>
    new Promise(resolve => setTimeout(resolve, timeToDelay));

  return (
    <S.Container>
      <S.Logo source={require('../../../assets/images/logo.png')} />
      <S.ButtonContainer>
        <RadiusButton
          text="아이로 시작하기"
          onPress={async () => {
            // 로딩 스피너 넣을곳
            await wait(2000);
            navigation.navigate('내 주변 식당 찾기');
          }}
        />
        <RadiusButton text="사장님으로 시작하기" onPress={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}
