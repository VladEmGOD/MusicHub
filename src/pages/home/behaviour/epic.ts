import { map } from 'rxjs';
import { increment, incrementByAmount } from './slice';
import { ofType } from 'redux-observable';
import { Epic } from 'types';

const homeEpic: Epic = action$ => {
  return action$.pipe(
    ofType(increment.type),
    map(_ => incrementByAmount(10)),
  );
};

export default homeEpic;
