import React from 'react';
import * as S from './style';
export function RadiusButton({text, onPress}) {
  return (
    <S.Container onPress={onPress}>
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}
