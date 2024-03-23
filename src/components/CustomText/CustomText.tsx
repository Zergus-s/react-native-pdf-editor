import React, {FC} from 'react';
import {View, Text} from 'react-native';

import {styles} from './CustomTextStyles';
import {CustomTextProps} from './CustomTextTypes';
import {PALETTE} from '../../assets/styles';
import {heightPixel} from '../../lib/normalize';
import {FontFamily} from '../../constants/fonts';

const CustomText: FC<CustomTextProps> = ({
  children,
  size = 14,
  family = FontFamily.jakarta500,
  style,
  maxLines,
  color = PALETTE.white,
  align = 'center',
  layoutCallback,
}) => {
  return (
    <View>
      <Text
        onTextLayout={layoutCallback}
        numberOfLines={maxLines}
        style={[
          styles.text,
          {
            fontFamily: family,
            fontSize: heightPixel(size),
            textAlign: align,
            color,
          },
          style ?? {},
        ]}>
        {children}
      </Text>
    </View>
  );
};

export default CustomText;
