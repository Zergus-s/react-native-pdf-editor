import React, {FC, useEffect, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  useSafeAreaFrame,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {heightPixel} from '../../lib/normalize';
import {StickyWrapProps} from './StickyWrapTypes';

const StickyWrap: FC<StickyWrapProps> = ({children, isHeader}) => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const isIos = Platform.OS === 'ios';
  const {height} = useSafeAreaFrame();
  const {bottom, top} = useSafeAreaInsets();

  useEffect(() => {
    const showKeyboard = Keyboard.addListener('keyboardWillShow', () =>
      setIsKeyboardOpen(true),
    );
    const hideKeyboard = Keyboard.addListener('keyboardWillHide', () =>
      setIsKeyboardOpen(false),
    );

    return () => {
      showKeyboard.remove();
      hideKeyboard.remove();
    };
  }, []);
  const minHeight = (() => {
    let value = height - top - bottom;
    if (isHeader) {
      value -= heightPixel(72);
    }

    return value;
  })();
  return (
    <KeyboardAvoidingView
      style={{flex: 1, minHeight: isKeyboardOpen ? 0 : minHeight}}
      behavior={isIos ? 'padding' : undefined}
      keyboardVerticalOffset={0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {children}
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default StickyWrap;
