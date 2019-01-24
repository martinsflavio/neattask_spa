import * as React from 'react';
import {
  NotFound } from '../views';

//TODO abstract exact property
interface IRoutes {
  path?: string; name: string; component: React.FunctionComponent
}
const Routes: IRoutes[] = [
  { name: "NotFound", component: NotFound }
];

export default Routes;
