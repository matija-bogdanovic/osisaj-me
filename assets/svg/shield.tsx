import { View } from 'react-native'
import React from 'react'
import Svg, {Path} from 'react-native-svg'

export default function Shield() {
  return (
    <View>
      <Svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
      >
        <Path
          d="M7 16C7 16 13.5 12.8 13.5 8V2.4L7 0L0.5 2.4V8C0.5 12.8 7 16 7 16Z"
          fill="#21AB8A"
        />
        <Path
          d="M4.5 7L6.45817 8.71429L9.5 5.5"
          stroke="#EEEEEE"
          strokeWidth="2"
        />
      </Svg>
    </View>
  );
}