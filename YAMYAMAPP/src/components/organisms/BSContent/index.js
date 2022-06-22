import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FilterMemu, OpenTime, Dist} from '../../../components';
import * as S from './style';

export function BSContent({
  tagList,
  onPress,
  onPressTag,
  openTime,
  setOpenTime,
  dist,
  setDist,
}) {
  return (
    <S.Container>
      <FilterMemu tagList={tagList} onPressTag={onPressTag} />
      <OpenTime openTime={openTime} setOpenTime={setOpenTime} />
      <Dist dist={dist} setDist={setDist} />
    </S.Container>
  );
}
