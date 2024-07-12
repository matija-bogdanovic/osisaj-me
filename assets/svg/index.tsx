import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface SvgIcon {
   size: number;
   color: string;
   width: number;
}

const Index:React.FC<SvgIcon> = ({size,color,width}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12.8 21.2V15H11.2V21.2H4C3.88954 21.2 3.8 21.1105 3.8 21V9.96838C3.8 9.90902 3.82636 9.85273 3.87196 9.81473L11.872 3.14806C11.9461 3.08626 12.0539 3.08626 12.128 3.14806L20.128 9.81473C20.1736 9.85273 20.2 9.90902 20.2 9.96837V21C20.2 21.1105 20.1105 21.2 20 21.2H12.8Z"
        stroke={color}
        strokeWidth={width}
      />
    </Svg>
  );
}

export default Index