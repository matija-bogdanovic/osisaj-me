import React from "react";
import Svg, { Path } from "react-native-svg";

type StrokeType = {
  stroke: string;
}

export const Pen:React.FC<StrokeType> = ({stroke}) => {
  return (
    <Svg width="19" height="19" viewBox="0 0 19 19" fill="none">
      <Path
        d="M1 13.0769V18H5.92308L17 6.92308L12.0769 2L1 13.0769Z"
        stroke={stroke}
        strokeWidth="2"
      />
    </Svg>
  );
}