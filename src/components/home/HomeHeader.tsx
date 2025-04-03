import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {homeHeaderStyles} from '../../styles/homeHeaderStyles';
import Icon from '../global/Icon';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Defs, LinearGradient, Path, Stop} from 'react-native-svg';
import {screenHeight, screenWidth, svgPath} from '../../utils/Constants';
import QRGenerateModal from '../modals/QRGenerateModal';

const HomeHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={homeHeaderStyles.mainContainer}>
      <SafeAreaView />
      <View style={[commonStyles.flexRowBetween, homeHeaderStyles.container]}>
        <TouchableOpacity>
          <Icon name="menu" iconFamily="Ionicons" size={22} color="#fff" />
        </TouchableOpacity>
        <Image
          style={homeHeaderStyles.logo}
          source={require('../../assets/images/logo_white.png')}
        />
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Icon
            name="account-circle"
            color="#FFFFFF"
            iconFamily="MaterialCommunityIcons"
            size={28}
          />
        </TouchableOpacity>
      </View>
      <Svg
        height={screenHeight * 0.14}
        width={screenWidth}
        viewBox="0 0 1440 320"
        style={homeHeaderStyles.curve}>
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset={'0%'} stopColor={'#007AFF'} stopOpacity={'1'} />
            <Stop offset={'100%'} stopColor={'#80BFFF'} stopOpacity={'1'} />
          </LinearGradient>
        </Defs>
        <Path fill="#80BFFF" d={svgPath} />
        <Path fill="url(#gradient)" d={svgPath} />
      </Svg>

      {isVisible && (
        <QRGenerateModal
          visible={isVisible}
          onClose={() => setIsVisible(false)}
        />
      )}
    </View>
  );
};

export default HomeHeader;
