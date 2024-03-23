import React, {FC} from 'react';
import {
  ActivityIndicator,
  Pressable,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderBackArrowIcon from '../../assets/HeaderBackArrowIcon';
import {PALETTE} from '../../assets/styles';
import {FontFamily} from '../../constants/fonts';
import CustomText from '../CustomText';
import {styles} from './CustomHeaderStyles';
import {CustomHeaderProps} from './CustomHeaderTypes';

const CustomHeader: FC<CustomHeaderProps> = ({
  leftComponent,
  rightComponent,
  title,
  backgroundColor,
  isLoading,
}) => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[
        styles.container,
        {paddingTop: top, marginTop: -top},
        backgroundColor ? {backgroundColor} : {backgroundColor: 'transparent'},
      ]}>
      <View style={styles.wrap}>
        <View style={styles.leftWrap}>
          {leftComponent ? (
            leftComponent({})
          ) : (
            <Pressable
              style={styles.backButton}
              onPress={navigation.goBack}
              hitSlop={{top: 25, left: 25, right: 25, bottom: 25}}>
              <HeaderBackArrowIcon />
            </Pressable>
          )}
        </View>
        <View style={[styles.titleWrap]}>
          {typeof title === 'string' ? (
            <CustomText
              size={17}
              family={FontFamily.jakarta500}
              style={{color: isDarkMode ? '#fff' : '#000'}}>
              {title}
            </CustomText>
          ) : (
            title
          )}
        </View>
        {rightComponent && !isLoading ? (
          <TouchableOpacity
            hitSlop={{top: 10, left: 10, right: 10, bottom: 10}}
            onPress={rightComponent.onPress}
            style={styles.rightWrap}>
            {rightComponent.icon}
          </TouchableOpacity>
        ) : (
          <View style={styles.rightEmpty} />
        )}
        {isLoading ? (
          <ActivityIndicator color={PALETTE.blue} size="small" />
        ) : null}
      </View>
    </View>
  );
};

export default CustomHeader;
