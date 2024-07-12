import Svg, { Path, Rect } from "react-native-svg";
import React from "react";

export default function Calender() {
  return (
    <Svg width="24" height="25" viewBox="0 0 24 25" fill="none">
      <Rect y="0.5" width="24" height="24" fill="white" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2.5V5.5H16V2.5H18V5.5H22V22.5H2V5.5H6V2.5H8ZM20 7.5H4V10.5L20 10.5V7.5ZM20 12.5L4 12.5V20.5H20V12.5ZM8 16.5V14.5H6V16.5H8Z"
        fill="#131617"
      />
    </Svg>
  );
}
