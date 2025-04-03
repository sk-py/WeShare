import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import React, {FC} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps {
  name: string;
  size: number;
  color?: string;
  iconFamily: 'Ionicons' | 'MaterialIcons' | 'MaterialCommunityIcons';
}

const Icon: FC<IconProps> = ({color, iconFamily, name, size}) => {
  return (
    <>
      {iconFamily === 'Ionicons' && (
        <Ionicons name={name} size={RFValue(size)} color={color} />
      )}
      {iconFamily === 'MaterialIcons' && (
        <MaterialIcons name={name} size={RFValue(size)} color={color} />
      )}
      {iconFamily === 'MaterialCommunityIcons' && (
        <MaterialCommunityIcons
          name={name}
          size={RFValue(size)}
          color={color}
        />
      )}
    </>
  );
};

export default Icon;
