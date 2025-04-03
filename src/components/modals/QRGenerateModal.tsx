import {
  View,
  Text,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {modalStyles} from '../../styles/modalStyles';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import QRCode from 'react-native-qrcode-svg';
import {multiColor} from '../../utils/Constants';
import CustomText from '../global/CustomText';
import Icon from '../global/Icon';

interface QRGenerateModalProps {
  visible: boolean;
  onClose: () => void;
}

const QRGenerateModal = ({visible, onClose}: QRGenerateModalProps) => {
  const [loading, setLoading] = useState(true);
  const [qrValue, setQRValue] = useState('SK');
  const shimmerTranslateX = useSharedValue(-300);

  const shimmerStyle = useAnimatedStyle(() => ({
    transform: [{translateX: shimmerTranslateX.value}],
  }));

  useEffect(() => {
    shimmerTranslateX.value = withRepeat(
      withTiming(300, {duration: 1500, easing: Easing.linear}),
      -1,
      false,
    );
  }, [visible]);

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onClose}
      onDismiss={onClose}
      presentationStyle="formSheet">
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.qrContainer}>
          {loading || qrValue === null || qrValue == '' ? (
            <View style={modalStyles.skeleton}>
              <Animated.View style={[modalStyles.shimmerOverlay, shimmerStyle]}>
                <LinearGradient
                  colors={['#f3f3f3', '#fff', '#f3f3f3']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={modalStyles.shimmerGradient}></LinearGradient>
              </Animated.View>
            </View>
          ) : (
            <QRCode
              value="qrValue"
              size={250}
              logoSize={60}
              logoBackgroundColor="#fff"
              logoMargin={2}
              logoBorderRadius={10}
              logo={require('../../assets/images/logo_blue.png')}
              linearGradient={multiColor}
              enableLinearGradient
            />
          )}
        </View>
        <View style={modalStyles.info}>
          <CustomText style={modalStyles.infoText1}>
            Ensure you are on same Wi-Fi as the device you are trying to connect
            to.
          </CustomText>
          <CustomText style={modalStyles.infoText2}>
            Ask the sender to scan the QR code to connect and transfer files!
          </CustomText>
        </View>
        <ActivityIndicator
          size="small"
          color={'#808080'}
          style={{alignSelf: 'center'}}
        />
        <TouchableOpacity
          onPress={() => onClose()}
          style={modalStyles.closeButton}>
          <Icon name="close" iconFamily="Ionicons" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default QRGenerateModal;
