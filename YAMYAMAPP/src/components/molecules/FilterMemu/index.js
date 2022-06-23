import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TagBtn, Title} from '../../../components';
import * as S from './style';

export function FilterMemu({tagList, onPress, onPressTag}) {
  return (
    <S.Container>
      <S.Content>
        <Title text={'메뉴'} size={'12px'} />
      </S.Content>
      <S.ListContainer>
        {tagList.map(({text, isPress}, index) => (
          <TagBtn
            key={index}
            text={text}
            onPress={() => onPressTag(text)}
            isPress={isPress}
          />
        ))}
      </S.ListContainer>
    </S.Container>
  );
}
