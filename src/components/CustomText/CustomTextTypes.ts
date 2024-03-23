import {
  NativeSyntheticEvent,
  TextLayoutEventData,
  TextStyle,
} from 'react-native';
import {ReactNode} from 'react';

export interface CustomTextProps {
  children: string | Array<string | ReactNode> | ReactNode;
  size?: number;
  family?: string;
  style?: TextStyle;
  maxLines?: number;
  color?: TextStyle['color'];
  align?: TextStyle['textAlign'];
  layoutCallback?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
}
