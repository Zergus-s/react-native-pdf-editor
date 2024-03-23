/* eslint-disable react/react-in-jsx-scope */
import FastImage from 'react-native-fast-image';
import CustomTextInput from '../../components/CustomTextInput';
import {ImageModel, TextModel} from './types';
import {Dimensions, StyleSheet} from 'react-native';
import {useState} from 'react';
const {width} = Dimensions.get('window');

export const Node = ({
  item,
  position,
  onChange,
}: {
  item: TextModel | ImageModel;
  position: number;
  onChange: (value: string, position: number) => void;
}) => {
  const [height, setHeight] = useState(100);
  if (item.type === 'text') {
    return (
      <CustomTextInput
        bottomMargin={0}
        value={item.value as string}
        onChangeText={newText => onChange(newText, position)}
        multiline={true}
        label={'Text Area'}
        style={[styles.inputStyle, {height}]}
        maxLength={999}
        onContentSizeChange={e =>
          setHeight(
            e.nativeEvent.contentSize.height > 100
              ? e.nativeEvent.contentSize.height
              : 100,
          )
        }
      />
    );
  } else {
    const image = item as ImageModel;
    return (
      <FastImage
        style={[styles.imageStyle, {height: width}]}
        source={{uri: image.value.path}}
      />
    );
  }
};

const styles = StyleSheet.create({
  inputStyle: {
    minHeight: 100,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
});
