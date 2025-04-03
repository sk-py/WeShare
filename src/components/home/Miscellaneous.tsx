import { View, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useRef, useState, RefObject } from 'react';
import { miscStyles } from '../../styles/miscStyles'; // Using your existing miscStyles
import CustomText from '../global/CustomText';
import { commonStyles } from '../../styles/commonStyles';
import { Colors, screenWidth } from '../../utils/Constants';

// Define interfaces
interface BannerItem {
  id: number;
  img: any;
}

interface ViewabilityConfig {
  itemVisiblePercentThreshold: number;
}

const Miscellaneous: React.FC = () => {
  const bannerListRef = useRef<FlatList<BannerItem> | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const ExploreData: BannerItem[] = [
    {
      id: 2,
      img: require('../../assets/icons/wild_robot.jpg'),
    },
    {
      id: 1,
      img: require('../../assets/icons/adbanner.png'),
    },
  ];

  const handleBannerScroll = React.useCallback(
    ({ viewableItems }: { viewableItems: Array<{ index: number | null }> }) => {
      if (viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index ?? 0);
      }
    },
    []
  );

  const scrollToIndex = React.useCallback((index: number) => {
    bannerListRef.current?.scrollToIndex({ index, animated: true });
    setActiveIndex(index);
  }, []);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderBannerItem = ({ item }: { item: BannerItem }) => (
    <Image source={item.img} style={miscStyles.adBanner} />
  );

  const keyExtractor = (item: BannerItem) => item.id.toString();

  return (
    <View style={miscStyles.container}>
      <CustomText fontSize={13} fontFamily="Okra-Bold">
        Explore
      </CustomText>
      <FlatList<BannerItem>
        horizontal
        ref={bannerListRef}
        data={ExploreData}
        onViewableItemsChanged={handleBannerScroll}
        viewabilityConfig={viewabilityConfig}
        contentContainerStyle={miscStyles.bannerContainer}
        renderItem={renderBannerItem}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
      />
      <View style={styles.indicatorContainer}>
        {ExploreData.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => scrollToIndex(index)}
            style={[
              miscStyles.indicators,
              {
                backgroundColor: activeIndex === index ? Colors.primary : Colors.secondary,
                borderColor: activeIndex !== index ? Colors.primary : "#FFFFFF",
              },
            ]}
          />
        ))}
      </View>
      <View style={commonStyles.flexRowBetween}>
        <CustomText
          fontFamily="Okra-Bold"
          style={miscStyles.text}
          fontSize={22}>
          #1 World Best File Sharing App!
        </CustomText>
        <Image
          source={require('../../assets/icons/share_logo.jpg')}
          style={miscStyles.image}
        />
      </View>
      <CustomText fontFamily="Okra-Bold" style={miscStyles.text2}>
        Made with 💙 by Sk-py
      </CustomText>
    </View>
  );
};

export default Miscellaneous;

// Local styles (keeping your miscStyles intact)
const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginTop: 10,
  },
});