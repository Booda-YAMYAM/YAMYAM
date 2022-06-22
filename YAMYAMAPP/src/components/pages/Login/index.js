import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {RadiusButton} from '../../../components';
import * as S from './style';

export function Login() {
  return (
    <S.Container>
      <S.Logo source={require('../../../assets/images/logo.png')} />
      <S.ButtonContainer>
        <RadiusButton text="아이로 시작하기" onPress={() => {}} />
        <RadiusButton text="사장님으로 시작하기" onPress={() => {}} />
      </S.ButtonContainer>
    </S.Container>
  );
}
