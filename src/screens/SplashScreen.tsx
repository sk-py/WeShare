import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {navigate} from '../utils/NavigationUtil';
import { commonStyles } from '../styles/commonStyles';

const SplashScreen = () => {
  const navigateToHome = () => {
    navigate('HomeScreen');
  };

  useEffect(() => {
    const timeOutId = setTimeout(navigateToHome, 1200);
    return () => clearTimeout(timeOutId);
  }, []);

  return (
    <View style={commonStyles.container}>
      <Image
        style={commonStyles.img}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;
