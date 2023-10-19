import { map } from 'rxjs';
import { type AlbumsPageAction, oneString } from './slice';
import type { Epic } from 'store';

const albumsEpic: Epic<AlbumsPageAction> = (action$, state$, deps) => {
  return action$.pipe(
    map(_ => oneString()),
  );
};

export default albumsEpic;