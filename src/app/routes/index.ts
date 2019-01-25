import * as React from 'react';
import {
  LandingPage, NotFound
} from '../views';

interface IRoutes {
  exact?: boolean,
  path?: string;
  name: string;
  component: React.FunctionComponent | React.ComponentClass;
}

const Routes: IRoutes[] = [
  { exact: true, path:"/", name: "LandingPage", component: LandingPage },
  {                        name: "NotFound",    component: NotFound }
];

export default Routes;
