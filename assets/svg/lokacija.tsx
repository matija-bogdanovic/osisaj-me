import React from 'react'
import { View } from 'react-native'
import Svg, {Path} from 'react-native-svg'

function Lokacija() {
  return (
    <View>
      <Svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <Path
          d="M7 11.375C9.41625 11.375 11.375 9.41625 11.375 7C11.375 4.58375 9.41625 2.625 7 2.625C4.58375 2.625 2.625 4.58375 2.625 7C2.625 9.41625 4.58375 11.375 7 11.375Z"
          stroke="#5B6570"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M7 2.33341V1.16675"
          stroke="#5B6570"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <Path
          d="M2.33317 7H1.1665"
          stroke="#5B6570"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <Path
          d="M7 11.6667V12.8334"
          stroke="#5B6570"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <Path
          d="M11.6665 7H12.8332"
          stroke="#5B6570"
          strokeLinecap="square"
          strokeLinejoin="round"
        />
        <Path
          d="M7 8.75C7.9665 8.75 8.75 7.9665 8.75 7C8.75 6.0335 7.9665 5.25 7 5.25C6.0335 5.25 5.25 6.0335 5.25 7C5.25 7.9665 6.0335 8.75 7 8.75Z"
          stroke="#5B6570"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export default Lokacija