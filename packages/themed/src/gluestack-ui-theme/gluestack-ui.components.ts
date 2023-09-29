import { createComponents } from '@gluestack-style/react';
import * as componentStyles from './components';

const components = createComponents(componentStyles);

type Components = typeof components;

declare module '@gluestack-style/react' {
  interface ICustomComponents extends Components {}
}
