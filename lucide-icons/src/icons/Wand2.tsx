import React from 'react';
import { Svg, Path } from 'react-native-svg';
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
      <Path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
      <Path d="m14 7 3 3" />
      <Path d="M5 6v4" />
      <Path d="M19 14v4" />
      <Path d="M10 2v2" />
      <Path d="M7 8H3" />
      <Path d="M21 16h-4" />
      <Path d="M11 3H9" />
    </Svg>
  );
};
Icon.displayName = 'Wand2';
export const Wand2 = React.memo(Icon);
