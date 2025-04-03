import {StyleSheet} from 'react-native';
import {screenWidth} from '../utils/Constants';

export const miscStyles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  // adBanner: {
  //   width: '100%',
  //   height: 140,
  //   resizeMode: 'cover',
  //   borderRadius: 10,
  //   marginVertical: 25,
  // },
  text: {
    opacity: 0.5,
    width: '60%',
  },
  text2: {
    opacity: 0.5,
    marginTop: 10,
    textAlign: 'center',
  },
  adBanner: {
    resizeMode: 'cover',
    width: screenWidth * 0.92,
    height: 140,
  },
  image: {
    resizeMode: 'contain',
    width: '35%',
    height: 120,
  },
  bannerContainer: {
    marginVertical: 14,
    gap: 2,
  },
  indicators: {
    height: 10,
    width: 10,
    borderRadius: 100,
    borderWidth: 1,
  },
});
