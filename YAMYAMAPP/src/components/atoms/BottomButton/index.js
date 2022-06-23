import React from 'react';
import {Image} from 'react-native';
import * as S from './style';
export function BottomButton({text, onPress}) {
  return (
    <S.Container onPress={onPress}>
      <Image
        style={{width: 30, height: 30}}
        source={require('../../../assets/images/filter.png')}
      />
    </S.Container>
  );
}
