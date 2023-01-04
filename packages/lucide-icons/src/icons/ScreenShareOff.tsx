import React from 'react'
import { StyledSvg } from '../StyledSvg'
import { Path } from 'react-native-svg'
const Icon = (props: any) => {
  return (
    <StyledSvg {...props}>
      <Path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
      <Path d="M8 21h8" />
      <Path d="M12 17v4" />
      <Path d="m22 3-5 5" />
      <Path d="m17 3 5 5" />
    </StyledSvg>
  )
}
Icon.displayName = 'ScreenShareOff'
export const ScreenShareOff = React.memo(Icon)
