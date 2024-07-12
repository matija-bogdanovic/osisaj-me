import React from "react";
import Svg, { Path } from "react-native-svg";

function Heart() {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21C13 21 22 16.0002 22 9.00043C22 5.50057 19 3.04405 16 3.00065C14.5 2.97894 13 3.50065 12 5.00059C11 3.50065 9.47405 3.00065 8 3.00065C5 3.00065 2 5.50057 2 9.00043C2 16.0002 11 21 12 21Z"
        fill="white"
        fillOpacity="0.4"
      />
      <Path
        d="M12 21C13 21 22 16.0002 22 9.00043C22 5.50057 19 3.04405 16 3.00065C14.5 2.97894 13 3.50065 12 5.00059C11 3.50065 9.47405 3.00065 8 3.00065C5 3.00065 2 5.50057 2 9.00043C2 16.0002 11 21 12 21Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Heart;
