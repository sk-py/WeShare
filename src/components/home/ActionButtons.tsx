import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {actionButtonStyles} from '../../styles/actionButtonStyles';
import {navigate} from '../../utils/NavigationUtil';

const ActionButtons = () => {
  return (
    <View style={actionButtonStyles.container}>
      <TouchableOpacity
        style={actionButtonStyles.button}
        onPress={() => navigate('SendScreen')}>
        <Image
          source={require('../../assets/icons/send.jpg')}
          style={actionButtonStyles.img}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={actionButtonStyles.button}
        onPress={() => navigate('ReceiveScreen')}>
        <Image
          source={require('../../assets/icons/receive.jpg')}
          style={actionButtonStyles.img}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ActionButtons;
