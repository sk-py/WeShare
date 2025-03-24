import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {commonStyles} from '../../styles/commonStyles';
import {homeHeaderStyles} from '../../styles/homeHeaderStyles';

const HomeHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={homeHeaderStyles.container}>
          <SafeAreaView />
          <View style={[commonStyles.container, homeHeaderStyles.container]}>
              <TouchableOpacity>
                  
              </TouchableOpacity>
          </View>
    </View>
  );
};

export default HomeHeader;
