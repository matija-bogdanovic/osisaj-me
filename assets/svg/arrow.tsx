import React from 'react'
import Svg, {Path} from 'react-native-svg'

export default function Arrow() {
  return (
    <Svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      fill="none"
    >
      <Path d="M1 13.5L7 7.5L0.999999 1.5" stroke="#131617" strokeWidth="2" />
    </Svg>
  );
}