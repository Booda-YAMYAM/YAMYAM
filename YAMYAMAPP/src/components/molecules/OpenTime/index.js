import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TagBtn, Title} from '../..';
import * as S from './style';

export function OpenTime({tagList, onPress, onPressTag}) {
  return (
    <S.Container>
      <S.Content>
        <Title text={'영업시간'} size={'12px'} />
      </S.Content>
    </S.Container>
  );
}
