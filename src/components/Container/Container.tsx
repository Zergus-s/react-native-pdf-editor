import {View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {children: JSX.Element | JSX.Element[]};

const Container = ({children}: Props) => {
  const {top, bottom} = useSafeAreaInsets();

  return (
    <View style={{paddingTop: top, paddingBottom: bottom, flex: 1}}>
      {children}
    </View>
  );
};

export default Container;
