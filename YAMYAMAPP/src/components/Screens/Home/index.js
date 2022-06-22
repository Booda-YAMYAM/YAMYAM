import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {BottomButton, BottomSheet} from '../..';
import * as S from './style';

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <S.Container>
      <WebView source={{uri: 'https://map.kakao.com/'}} />
      <S.BottomContainer>
        <BottomButton
          text="필터 설정하기"
          onPress={() => setModalVisible(true)}
        />
      </S.BottomContainer>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </S.Container>
  );
}
