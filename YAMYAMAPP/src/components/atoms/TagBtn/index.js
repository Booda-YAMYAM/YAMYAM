import React from 'react';
import * as S from './style';
export function TagBtn({text, onPress, isPress}) {
  return (
    <S.Container onPress={onPress} isPress={isPress}>
      <S.Text isPress={isPress}>{text}</S.Text>
    </S.Container>
  );
}
