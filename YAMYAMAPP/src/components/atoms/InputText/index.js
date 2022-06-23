import React from 'react';
import * as S from './style';
export function InputText({placeholder, text, onChangeValue}) {
  return (
    <S.InputText
      style={styles.input}
      onChangeText={onChangeValue}
      value={text}
      placeholder={placeholder}
    />
  );
}
