import {useRef, useEffect} from 'react';
import {Dimensions, Animated, PanResponder} from 'react-native';

export function useBottomSheet({modalVisible, setModalVisible, setResult}) {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const closeBottomSheet = () => {
    moveBottomSheet({value: screenHeight}).start(() => {
      setModalVisible(false);
      setResult && setResult(false);
    });
  };

  const moveBottomSheet = ({value}) =>
    Animated.timing(panY, {
      toValue: value,
      duration: 300,
      useNativeDriver: true,
    });

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: (event, gestureState) => {
        panY.setValue(gestureState.dy);
      },
      onPanResponderRelease: (event, gestureState) => {
        if (gestureState.dy > 0 && gestureState.vy > 1.5) {
          closeBottomSheet();
        } else {
          moveBottomSheet({value: 0}).start();
        }
      },
    }),
  ).current;

  useEffect(() => {
    if (modalVisible) moveBottomSheet({value: 0}).start();
  }, [modalVisible]);

  return {translateY, screenHeight, panResponders, closeBottomSheet};
}
