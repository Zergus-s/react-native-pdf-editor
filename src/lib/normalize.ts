import {Dimensions, PixelRatio} from 'react-native';
const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');
const minWidth = 414;
const minHeight = 896;
const widthBaseScale = SCREEN_WIDTH < minWidth ? 1 : SCREEN_WIDTH / minWidth;
const heightBaseScale =
  SCREEN_HEIGHT < minHeight ? 1 : SCREEN_HEIGHT / minHeight;

const normalize = (size: number, based = 'width') => {
  const newSize =
    based === 'height' ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};
//for width  pixel
//for Margin and Padding horizontal pixel
const widthPixel = (size: number) => {
  return normalize(size, 'width');
};
//for height  pixel
//for font  pixel
//for Margin and Padding vertical pixel
const heightPixel = (size: number) => {
  return normalize(size, 'height');
};

export {widthPixel, heightPixel};
