import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TagBtn, Title} from '../..';
import * as S from './style';

export function BSContent({tagList, onPress, onPressTag}) {
  return (
    <S.Container>
      <FilterMemu tagList={tagList} onPressTag={onPressTag} />
    </S.Container>
  );
}
