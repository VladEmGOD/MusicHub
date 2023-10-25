import type { AppEpic } from 'store';
import { map } from 'rxjs';
import { increment, incrementByAmount } from './slice';
import { ofType } from 'redux-observable';

const homeEpic: AppEpic = action$ => {
  return action$.pipe(
    ofType(increment.type),
    map(_ => incrementByAmount(10)),
  );
};

export default homeEpic;
