import { Page as HomePage, handler as HomeHandler } from 'pages/home';
import { Page as AlbumPage, handler as AlbumsHandler } from 'pages/albums';
import { Page as NotFoundPage, handler as NotFoundHandler } from 'pages/notFound';

import { Handler } from 'routing/types';
import { PageState } from 'pages/types';
import { PathNames } from './pathNames';

type RouteObject = {
  element: () => JSX.Element;
  handler: Handler<PageState>;
}

export const PageRoutes: Record<string, RouteObject> = {
  [PathNames.Home]: { element: HomePage, handler: HomeHandler },
  [PathNames.Albums]: { element: AlbumPage, handler: AlbumsHandler },
  [PathNames.NotFound]: { element: NotFoundPage, handler: NotFoundHandler },
}