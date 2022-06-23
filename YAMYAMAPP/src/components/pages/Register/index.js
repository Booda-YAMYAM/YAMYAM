// import React, {useEffect} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   ActivityIndicator,
//   StyleSheet,
//   TouchableOpacity,
// } from 'react-native';
// import {RadiusButton, Title} from '../../../components';
// import * as S from './style';

// export function Login({navigation}) {
//   const wait = timeToDelay =>
//     new Promise(resolve => setTimeout(resolve, timeToDelay));

//   return (
//     <S.Container>
//       <S.Logo source={require('../../../assets/images/logo.png')} />
//       <S.ButtonContainer>
//         <InputText placeholder={'이메일'} />
//         <InputText placeholder={'이메일'} />
//       </S.ButtonContainer>
//       <RadiusButton text={'로그인 하기'} onPress={async () => {}} />
//       <Title text={'YAMYAM가 처음이신가요??'} />
//       <S.BackButton onPress={() => navigation.navigate('회원가입')}>
//         <S.BackButtonText>뒤로가기</S.BackButtonText>
//       </S.BackButton>
//     </S.Container>
//   );
// }
// // const styles = StyleSheet.create({
// //   container: {
// //     position: 'absolute',
// //     flex: 1,
// //     justifyContent: 'center',
// //   },
// //   horizontal: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     padding: 10,
// //   },
// // });
