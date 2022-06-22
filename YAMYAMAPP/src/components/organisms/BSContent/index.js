import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FilterMemu, OpenTime, Dist, Title, Button} from '../../../components';
import * as S from './style';

export function BSContent({
  tagList,
  onPress,
  onPressTag,
  openTime,
  setOpenTime,
  dist,
  setDist,
  setResult,
}) {
  return (
    <>
      <S.Header>
        <Title text={'필터 설정하기'} size={'20px'} />
      </S.Header>
      <S.Container>
        <FilterMemu tagList={tagList} onPressTag={onPressTag} />
        <OpenTime openTime={openTime} setOpenTime={setOpenTime} />
        <Dist dist={dist} setDist={setDist} />
        <S.footer>
          <Button text={'적용하기'} onPress={setResult} />
        </S.footer>
      </S.Container>
    </>
  );
}
