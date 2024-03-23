import {FC} from 'react';
import {TextStyle, TouchableOpacity, ViewStyle, StyleSheet} from 'react-native';

import CustomText from '../CustomText';
import Loader from '../Loader';
import {PALETTE} from '../../assets/styles';
import {FontFamily} from '../../constants/fonts';
import {heightPixel, widthPixel} from '../../lib/normalize';
import {triggetHaptic} from '../../lib/triggetHaptic';

export interface ApplyButtonProps {
  children: string;
  action: () => void;
  style?: ViewStyle;
  isDisabled?: boolean;
  isLoading?: boolean;
  isFullwith?: boolean;
  textStyle?: TextStyle;
}

const CustomButton: FC<ApplyButtonProps> = ({
  children,
  action,
  style,
  isDisabled,
  isLoading,
  isFullwith,
  textStyle,
}) => {
  const onPress = () => {
    triggetHaptic();
    action();
  };
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isFullwith && {width: '100%'},
        style ?? {},
        isDisabled && {backgroundColor: PALETTE.midGray},
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {isLoading ? (
        <Loader />
      ) : (
        <CustomText
          //@ts-ignore
          style={[
            isDisabled ? styles.textDisabled : styles.text,
            textStyle ?? {},
          ]}>
          {children}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 7,
    width: 'auto',
    backgroundColor: PALETTE.lightPurple,
    borderRadius: widthPixel(12),
  },
  text: {
    color: PALETTE.white,
    fontSize: heightPixel(16),
    lineHeight: heightPixel(20),
    fontFamily: FontFamily.jakarta600,
  },
  textDisabled: {
    color: 'rgba(255, 255, 255, 0.65)',
    fontSize: heightPixel(16),
    lineHeight: heightPixel(20),
  },
});
