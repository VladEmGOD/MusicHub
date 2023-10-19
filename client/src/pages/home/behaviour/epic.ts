import type { Epic } from 'store';
import { map } from 'rxjs';
import { increment, type HomePageAction } from './slice';

const homeEpic: Epic<HomePageAction> = (action$, state$, deps) => {
  return action$.pipe(
    map(_ => increment()),
  );
};

export default homeEpic;