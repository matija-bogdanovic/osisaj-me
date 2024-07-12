import React from "react";
import { View } from "react-native";
import Svg, {Rect,Circle,Path} from 'react-native-svg'

interface SvgIcon {
   size: number;
   color: string;
}
const Lokali:React.FC<SvgIcon> = ({size,color}) => {
  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 25 25"
        fill="none"
      >
        <Rect
          width={size}
          height={size}
          transform="translate(0.25 0.5)"
          fill="white"
        />
        <Circle
          cx="6.25"
          cy="6.5"
          r="3.3"
          stroke={color}
          strokeWidth="1.4"
        />
        <Circle
          cx="18.25"
          cy="6.5"
          r="3.3"
          stroke={color}
          strokeWidth="1.4"
        />
        <Path
          d="M8.75 9L20.25 22.5M16.25 9L4.25 22.5"
          stroke={color}
          strokeWidth="1.6"
        />
      </Svg>
    </View>
  );
}

export default Lokali;
