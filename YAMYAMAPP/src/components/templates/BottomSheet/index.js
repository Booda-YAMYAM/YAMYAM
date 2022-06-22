import React, {useState} from 'react';
import {Modal, TouchableWithoutFeedback, View, Text} from 'react-native';
import {useBottomSheet} from '../../../hooks/useBottomSheet';
import {BSContent} from '../../../components';
import * as S from './style';

export function BottomSheet({modalVisible, setModalVisible}) {
  const [tagList, setTagList] = useState([
    {text: '한식', isPress: false},
    {text: '중식', isPress: false},
    {text: '양식', isPress: false},
    {text: '분식', isPress: false},
    {text: '아시안', isPress: false},
    {text: '디저트', isPress: false},
    {text: '카페', isPress: false},
    {text: '패스트푸드', isPress: false},
    {text: '편의점', isPress: false},
    {text: '기타', isPress: false},
  ]);

  const [openTime, setOpenTime] = useState({
    open: 0,
    close: 0,
  });

  const [dist, setDist] = useState(0);
  const [result, setResult] = useState(false);
  const {translateY, screenHeight, panResponders, closeBottomSheet} =
    useBottomSheet({
      modalVisible,
      setModalVisible,
      setResult,
    });

  const onPressTag = tag => {
    setTagList(prev => {
      return prev.map(item => {
        if (item.text === tag) {
          return {...item, isPress: !item.isPress};
        }
        return item;
      });
    });
  };

  const onSlider = (open, close) => {
    setOpenTime({open, close});
  };

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
          <BSContent
            tagList={tagList}
            onPressTag={onPressTag}
            openTime={openTime}
            setOpenTime={onSlider}
            dist={dist}
            setDist={setDist}
          />
        </S.Container>
      </S.Overlay>
    </Modal>
  );
}