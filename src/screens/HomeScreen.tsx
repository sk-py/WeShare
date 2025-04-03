import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {commonStyles} from '../styles/commonStyles';
import HomeHeader from '../components/home/HomeHeader';
import ActionButtons from '../components/home/ActionButtons';
import Options from '../components/global/Options';
import Miscellaneous from '../components/home/Miscellaneous';

const HomeScreen = () => {
  return (
    <View style={commonStyles.baseContainer}>
      <HomeHeader />
      <ScrollView
        contentContainerStyle={{paddingBottom: 100, padding: 15}}
        showsVerticalScrollIndicator={false}>
        <ActionButtons />
        <Options isHome />
        <Miscellaneous />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
