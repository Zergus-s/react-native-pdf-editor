import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {FC} from 'react';

import {StyleProp} from 'react-native';

export interface IconModel {
  color?: string;
  style?: StyleProp<{[property: string]: string | number}>;
  height?: number;
  width?: number;
  focused?: boolean;
}

const HeaderBackArrowIcon: FC<IconModel> = props => {
  const {height = 24, width = 24} = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.29 6.29l-5 5a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l5 5a1.003 1.003 0 101.42-1.42L9.41 13H17a1 1 0 000-2H9.41l3.3-3.29a1.001 1.001 0 00-.325-1.639 1 1 0 00-1.094.22z"
        fill="#0CBAFF"
      />
    </Svg>
  );
};

export default HeaderBackArrowIcon;
