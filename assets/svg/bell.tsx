import React from "react";
import Svg, { Path } from "react-native-svg";

function Bell() {
  return (
    <Svg width="14" height="21" viewBox="0 0 14 22" fill="none">
      <Path
        d="M0.8 7C0.8 3.57583 3.57583 0.8 7 0.8C10.4242 0.8 13.2 3.57583 13.2 7V17.2H0.8V7Z"
        stroke="#131617"
        strokeWidth="2"
      />
      <Path d="M4 20H10" stroke="#131617" strokeWidth="2" />
    </Svg>
  );
}

export default Bell;
