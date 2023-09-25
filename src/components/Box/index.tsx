import React, { forwardRef } from 'react';

import { Root as AccessibleBox } from './styled-components';

import { usePropResolution } from '../../hooks';
import { GenericComponentType } from '../../types';

const BoxTemp = forwardRef(({ children, ...props }: any, ref?: any) => {
  const resolvedPropForGluestack = usePropResolution(props);
  return (
    <AccessibleBox {...resolvedPropForGluestack} ref={ref}>
      {children}
    </AccessibleBox>
  );
});

const BoxNew = BoxTemp as any;

export type IBoxComponentType<Box> = GenericComponentType<Box>;

export const Box = BoxNew as IBoxComponentType<typeof AccessibleBox>;
