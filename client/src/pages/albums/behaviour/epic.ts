import type { Epic } from 'types';
import { map } from 'rxjs';
import { oneString } from './slice';
import { ofType } from 'redux-observable';

const albumsEpic: Epic = (action$, state$, deps) => {
  return action$.pipe(
    ofType(oneString.type),
    map(_ => oneString()),
  );
};

export default albumsEpic;