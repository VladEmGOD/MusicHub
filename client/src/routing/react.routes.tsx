import { RouteObject } from "react-router";
import Routes from './routes'

import { Page as Home } from 'pages/home'
import { Page as Albums } from 'pages/albums'

export default [
  { path: Routes.home, element: <Home /> },
  { path: Routes.albums, element: <Albums /> },
] as RouteObject[];