import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {optionStyles} from '../../styles/optionsStyles';
import Icon from './Icon';
import {Colors} from '../../utils/Constants';
import CustomText from './CustomText';

interface OptionProps {
  isHome?: boolean;
  onMediaPickedUp?: (media: any) => void;
  onFilePickedUp?: (media: any) => void;
}

const Options = ({isHome, onFilePickedUp, onMediaPickedUp}: OptionProps) => {
  return (
    <View style={optionStyles.container}>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icon
          name="images"
          iconFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomText style={optionStyles.text} fontFamily="Okra-Medium">
          Photo
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icon
          name="musical-notes-sharp"
          iconFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomText style={optionStyles.text} fontFamily="Okra-Medium">
          Audio
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icon
          name="folder-open"
          iconFamily="Ionicons"
          color={Colors.primary}
          size={20}
        />
        <CustomText style={optionStyles.text} fontFamily="Okra-Medium">
          Files
        </CustomText>
      </TouchableOpacity>
      <TouchableOpacity style={optionStyles.subContainer} onPress={() => {}}>
        <Icon
          name="contacts"
          iconFamily="MaterialCommunityIcons"
          color={Colors.primary}
          size={20}
        />
        <CustomText style={optionStyles.text} fontFamily="Okra-Medium">
          Contacts
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default Options;
