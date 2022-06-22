import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, View, Text} from 'react-native';
import {useBottomSheet} from '../../../hooks/useBottomSheet';
import * as S from './style';

export function BottomSheet({modalVisible, setModalVisible}) {
  const [result, setResult] = useState(false);
  const {translateY, screenHeight, panResponders, closeBottomSheet} =
    useBottomSheet({
      modalVisible,
      setModalVisible,
      setResult,
    });

  return (
    <Modal
      visible={modalVisible}
      animationType={'fade'}
      transparent
      statusBarTranslucent>
      <S.Overlay>
        <TouchableWithoutFeedback onPress={closeBottomSheet}>
          <S.Background />
        </TouchableWithoutFeedback>
        <S.Container
          height={screenHeight}
          isResult={result}
          style={{transform: [{translateY: translateY}]}}
          {...panResponders.panHandlers}>
          <View>
            <Text>안녕하세요 ㅎㅎ</Text>
          </View>
        </S.Container>
      </S.Overlay>
    </Modal>
  );
}
