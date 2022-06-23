import React from 'react';
import * as S from './style';
export function InputText({placeholder, text, onChangeValue}) {
  return (
    <S.InPut
      onChangeText={onChangeValue}
      value={text}
      placeholder={placeholder}
    />
  );
}
