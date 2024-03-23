import {TextInputProps} from 'react-native';

export type CustomTextInputProps = TextInputProps & {
  errorText?: string;
  infoText?: string;
  isRequired?: boolean;
  label?: string;
  bottomMargin?: number;
  description?: string;
};
