import {StyleSheet} from 'react-native';
import {screenHeight} from '../utils/Constants';

export const actionButtonStyles = StyleSheet.create({
  container: {
    marginTop: screenHeight * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    width: 140,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
