import React from 'react';
import * as S from './style';

export function Title({text, size = 10}) {
  return <S.Text size={size}>{text}</S.Text>;
}
