import { Router } from './createRouter';
import { distinctUntilChanged, ignoreElements, map, merge, switchMap, tap } from 'rxjs';
import { back, finishNavigation, forward, navigateTo, startNavigation } from './slice';
import { ofType } from 'redux-observable';
import type { Epic } from 'types';
import { Location } from 'history';
import { PageRoutes } from './pageRoutes';
import { PathNames } from './pathNames';

const createRoutingEpic = (router: Router) => {
  const routingEpic: Epic = (action$, state$, deps$) => {
    const navigateTo$ = action$.pipe(
      ofType(navigateTo.type),
      tap(action => router.push(action.payload)),
      ignoreElements(),
    );

    const back$ = action$.pipe(
      ofType(back.type),
      tap(_ => router.back()),
      ignoreElements(),
    );

    const forward$ = action$.pipe(
      ofType(forward.type),
      tap(_ => router.forward()),
      ignoreElements(),
    );

    const locationChanged$ = router.historyUpdate$.pipe(
      distinctUntilChanged(),
      tap(update => console.log("history changed: ", update)),
      map(update => {
        return startNavigation({ location: update.location });
      }),
    );

    const startNavigation$ = action$.pipe(
      ofType(startNavigation.type),
      switchMap(action =>
        getRouteObject(action.payload.location)
          .handler().pipe(
            map(handlerResult => finishNavigation({
              handlerResult,
              location: action.payload.location
            }))
          )
      ),
    );

    return merge(navigateTo$, back$, forward$, locationChanged$, startNavigation$);
  };

  return routingEpic;
};

const getRouteObject = (location: Location) => {
  const pagePathKey = Object.keys(PageRoutes).find(path => path === location.pathname);
  console.log('pagePathKey: ', pagePathKey);
  if (pagePathKey)
    return PageRoutes[pagePathKey];
  return PageRoutes[PathNames.NotFound];
}

export default createRoutingEpic;
