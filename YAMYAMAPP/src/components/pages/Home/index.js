import React, {useState, useRef} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {BottomButton, BottomSheet} from '../..';
import * as S from './style';

export function Home() {
  const [modalVisible, setModalVisible] = useState(false);

  const url = 'https://yamyma-webview2.vercel.app/#/';
  // const url = 'http://localhost:3000/#/';
  let webRef = useRef(null);

  /** 웹뷰 ref */
  const handleSetRef = _ref => {
    webRef = _ref;
  };

  /* native -> web */
  // const native_to_web = () => {
  //   console.log(webRef.postMessage(JSON.stringify({changeText: 'World'}), '*'));
  // };

  const sendData = result => {
    console.log(webRef.postMessage(JSON.stringify(result), '*'));
  };

  const errorHandler = ({nativeEvent}) =>
    console.warn('WebView error: ', nativeEvent);

  /* web -> native */
  const web_to_native = e => {
    console.log(e.nativeEvent.data);
  };

  return (
    <S.Container>
      <WebView
        ref={handleSetRef}
        source={{uri: url}}
        javaScriptEnabled={true}
        onError={errorHandler}
        onMessage={event => {
          console.log('받은 데이터(React) : ' + event.nativeEvent.data);
        }}
      />
      <S.BottomContainer>
        {!modalVisible && (
          <BottomButton
            text="필터 설정하기"
            onPress={() => {
              // sendData('korea');
              setModalVisible(true);
            }}
          />
        )}
      </S.BottomContainer>
      <BottomSheet
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        sendData={sendData}
      />
    </S.Container>
  );
}
