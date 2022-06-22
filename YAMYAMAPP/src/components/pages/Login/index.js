import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {RadiusButton} from '../..';
import * as S from './style';

export function Login({navigation}) {
  return (
    <S.Container>
      <S.Logo source={require('../../../assets/images/logo.png')} />
      <S.ButtonContainer>
        <RadiusButton
          text="아이로 시작하기"
          onPress={() => navigation.navigate('Home')}
        />
        <RadiusButton text="사장님으로 시작하기" onPress={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}
