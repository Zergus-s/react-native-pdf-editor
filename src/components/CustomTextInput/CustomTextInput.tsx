import React, {FC} from 'react';
import {View, TextInput} from 'react-native';

import CustomText from '../CustomText';

import {CustomTextInputProps} from './CustomTextInputTypes';
import {styles} from './CustomTextInputStyles';
import {PALETTE} from '../../assets/styles';
import {FontFamily} from '../../constants/fonts';
import {heightPixel} from '../../lib/normalize';

const Description = ({text}: {text: string}) => (
  <CustomText
    size={14}
    style={{
      textAlign: 'left',
      color: PALETTE.gray,
      marginBottom: heightPixel(12),
      fontFamily: FontFamily.jakarta700,
    }}>
    {text}
  </CustomText>
);

const CustomTextInput: FC<CustomTextInputProps> = ({
  infoText,
  errorText,
  multiline,
  description,
  style,
  onBlur,
  onChangeText,
  placeholder,
  label,
  isRequired,
  bottomMargin,
  ...restProps
}) => {
  const labelText = (
    <View style={styles.labelContainer}>
      <CustomText style={styles.label}>
        {label}
        <CustomText
          style={{
            color: PALETTE.orange,
          }}>
          {isRequired && label ? `*` : ''}
        </CustomText>
      </CustomText>
    </View>
  );

  const customPlaceholder = (
    <CustomText style={styles.placeholder}>
      {placeholder}
      <CustomText
        style={{
          color: PALETTE.orange,
        }}>
        {isRequired && !label && placeholder ? `*` : ''}
      </CustomText>
    </CustomText>
  );

  const MultilineInput = (
    <View style={{flex: 1, justifyContent: 'flex-start', position: 'relative'}}>
      {!restProps.value && (
        <View style={{position: 'absolute', left: 0}}>{customPlaceholder}</View>
      )}
      <TextInput
        onChangeText={onChangeText}
        style={[styles.input, styles.multiline, style]}
        placeholderTextColor={'#BBBBBB'}
        selectionColor={PALETTE.orange}
        textAlignVertical="top"
        onBlur={onBlur}
        multiline
        {...restProps}
      />
    </View>
  );

  const getMarginBottom = () => {
    if (bottomMargin || bottomMargin === 0) return bottomMargin;
    if (infoText || !label) return heightPixel(12);
    return heightPixel(20);
  };

  return (
    <View style={{marginBottom: getMarginBottom()}}>
      {!!label && labelText}
      {!!description && <Description text={description} />}
      <View
        style={[
          multiline ? styles.textMultilineInputWrap : styles.textInputWrap,
          errorText ? styles.inputBorderError : styles.inputBorder,
          style,
        ]}>
        {MultilineInput}
      </View>
      {!!errorText && (
        <CustomText style={styles.errorText}>{errorText}</CustomText>
      )}
      {!!infoText && !errorText && (
        <CustomText style={styles.infoText}>{infoText}</CustomText>
      )}
    </View>
  );
};

export default CustomTextInput;
