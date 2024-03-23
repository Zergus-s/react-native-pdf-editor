import {Image} from 'react-native-image-crop-picker';

export type TextModel = {
  type: 'image' | 'text';
  position: number;
  value: string;
};
export type ImageModel = {
  type: 'image' | 'text';
  position: number;
  value: Image;
};

export type ItemsModel = Array<TextModel | ImageModel>;
