import {ViewStyle} from 'react-native';
import {ReactNode} from 'react';

export interface PrimaryButtonProps {
  children: ReactNode;
  action: () => void;
  style?: ViewStyle;
}
