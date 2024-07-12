import React from "react";
import Svg, { Circle, Path } from "react-native-svg";

interface SvgIcon {
  color: string;
  size: number;
}

const Pretraga: React.FC<SvgIcon> = ({ color, size }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <Circle
        cx="11.75"
        cy="11.5"
        r="8.2"
        stroke={color}
        strokeWidth="1.6" // Increased stroke width
      />
      <Path d="M17.5 17.25L22.75 22.5" stroke={color} strokeWidth="2" /> 
    </Svg>
  );
};

export default Pretraga;
