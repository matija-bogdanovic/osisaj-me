import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface Svgicon {
   color: string;
   size: number;
}

const Mapa:React.FC<Svgicon> = ({color,size}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 21 21"
      fill="none"
    >
      <Path
        d="M7.5 2.5L7.5 15.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.5 5.5L13.5 18.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.94376 15.8344L7.53237 15.5601L7.10309 15.8054L1.3 19.1215V4.96426L7.46763 1.4399L13.0562 5.16564L13.4676 5.4399L13.8969 5.19459L19.7 1.87854V16.0357L13.5324 19.5601L7.94376 15.8344Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export default Mapa