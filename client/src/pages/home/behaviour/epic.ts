import type { AppEpic } from 'store';
import { map } from 'rxjs';
import { increment, incrementByAmount, type HomePageAction } from './slice';
import { ofType } from 'redux-observable';

const homeEpic: AppEpic = (action$, state$, deps) => {
  return action$.pipe(
    ofType(increment.type),
    map(_ => incrementByAmount(10)),
  );
};

export default homeEpic;