import React from 'react';
import { Svg, Line, Path } from 'react-native-svg';
const Icon = (props: any) => {
  const { color = 'black', size = 24 } = props;
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={`${color}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M4.12 4.107a5.4 5.4 0 0 0-.538.473C1.46 6.7 1.33 10.28 4 13l8 8 4.5-4.5" />
      <Path d="M19.328 13.672 20 13c2.67-2.72 2.54-6.3.42-8.42a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-2.386-1.393" />
      <Line x1="2" y1="2" x2="22" y2="22" />
    </Svg>
  );
};
Icon.displayName = 'HeartOff';
export const HeartOff = React.memo(Icon);
