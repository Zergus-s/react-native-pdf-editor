import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SaveIcon() {
  return (
    <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.172 1a2 2 0 011.414.586l2.828 2.828A2 2 0 0123 5.828V20a3 3 0 01-3 3H4a3 3 0 01-3-3V4a3 3 0 013-3h14.172zM4 3a1 1 0 00-1 1v16a1 1 0 001 1h1v-6a3 3 0 013-3h8a3 3 0 013 3v6h1a1 1 0 001-1V6.828a2 2 0 00-.586-1.414l-1.828-1.828A2 2 0 0017.172 3H17v2a3 3 0 01-3 3h-4a3 3 0 01-3-3V3H4zm13 18v-6a1 1 0 00-1-1H8a1 1 0 00-1 1v6h10zM9 3h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1V3z"
        fill="#000000"
      />
    </Svg>
  );
}

export default SaveIcon;
