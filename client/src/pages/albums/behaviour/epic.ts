import { map } from 'rxjs';
import { oneString } from './slice';
import type { AppEpic } from 'store';
import { ofType } from 'redux-observable';

const albumsEpic: AppEpic = (action$, state$, deps) => {
  return action$.pipe(
    ofType(oneString.type),
    map(_ => oneString()),
  );
};

export default albumsEpic;