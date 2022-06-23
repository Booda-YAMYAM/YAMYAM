import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {BottomButton, BottomSheet} from '../..';
import * as S from './style';

const WebviewContainer = ({handleSetRef, handleEndLoading}) => {
  const url = 'https://yamyma-webview2-68sp8b10c-booda.vercel.app/#/';

  /** 웹뷰에서 rn으로 값을 보낼때 거치는 함수 */
  const handleOnMessage = ({nativeEvent: {data}}) => {
    // data에 웹뷰에서 보낸 값이 들어옵니다.
    console.log(data);
  };

  return (
    <WebView
      onLoadEnd={handleEndLoading}
      onMessage={handleOnMessage}
      ref={handleSetRef}
      source={{url}}
    />
  );
};

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  // 웹뷰와 rn과의 소통은 아래의 ref 값을 이용하여 이루어집니다.
  let webviewRef = useRef();

  /** 웹뷰 ref */
  const handleSetRef = _ref => {
    webviewRef = _ref;
  };

  /** webview 로딩 완료시 */
  const handleEndLoading = e => {
    console.log('handleEndLoading');
    /** rn에서 웹뷰로 정보를 보내는 메소드 */
    webviewRef.postMessage('로딩 완료시 webview로 정보를 보내는 곳');
  };

  return (
    <S.Container>
      <WebviewContainer
        webviewRef={webviewRef}
        handleSetRef={handleSetRef}
        handleEndLoading={handleEndLoading}
      />
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
