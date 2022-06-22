import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TagBtn, Title} from '../..';
import * as S from './style';
import {Slider} from '@miblanchard/react-native-slider';

export function OpenTime({openTime, setOpenTime}) {
  return (
    <S.Container>
      <S.Content>
        <Title text={'영업시간'} size={'12px'} />
      </S.Content>
      <S.SliderContainer>
        <Slider
          trackStyle={{backgroundColor: '#f0f0f0'}}
          thumbStyle={{
            backgroundColor: '#FFE082',
          }}
          value={openTime.open}
          minimumValue={0}
          maximumValue={24}
          minimumTrackTintColor={'#FFE082'}
          onValueChange={value => setOpenTime(value)}
          step={1}
        />
        <Text>Value: {openTime.open}</Text>
      </S.SliderContainer>
    </S.Container>
  );
}
