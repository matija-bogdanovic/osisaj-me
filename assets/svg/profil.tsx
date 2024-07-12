import React from 'react'
import Svg, {Path, Circle} from 'react-native-svg'

interface Svgicon {
   color: string;
   size: number;
}

const Profil:React.FC<Svgicon> = ({color, size}) => {
    return <Svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
   >
      <Path
         d="M20 22.5V20.5C20 18.2909 18.2091 16.5 16 16.5H8C5.79086 16.5 4 18.2909 4 20.5V22.5"
         stroke={color}
         strokeWidth="1.6" />
      <Circle cx="12" cy="8.5" r="5.2" stroke={color} strokeWidth="1.6" />
   </Svg>;
}

export default Profil