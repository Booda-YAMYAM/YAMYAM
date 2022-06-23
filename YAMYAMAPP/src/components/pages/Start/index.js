import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {InputText} from '../../../components';
import {RadiusButton, Title} from '../..';
import * as S from './style';

export function Start({navigation}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const wait = timeToDelay =>
    new Promise(resolve => setTimeout(resolve, timeToDelay));
  return (
    <>
      {isLoading && (
        <S.LoadingContainer>
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
          </View>
        </S.LoadingContainer>
      )}
      <S.Container>
        <S.Logo source={require('../../../assets/images/logo.png')} />
        <S.ButtonContainer>
          <InputText placeholder={'아이디를 입력해 주세요'} />
          <InputText placeholder={'패스워드를 입력해 주세요'} />
        </S.ButtonContainer>
        <RadiusButton
          text={'로그인 하기'}
          onPress={async () => {
            setIsLoading(true);
            await wait(4000);
            setIsLoading(false);
            navigation.navigate('안녕하세요!');
          }}
        />
        <S.Bottom>
          <Title text={'YAMYAM가 처음이신가요??'} size={13} />
          <S.BackButton onPress={() => {}}>
            <S.BackButtonText>회원가입</S.BackButtonText>
          </S.BackButton>
        </S.Bottom>
      </S.Container>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
