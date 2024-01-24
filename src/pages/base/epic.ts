import type { Epic } from 'types';
import { map } from 'rxjs';
import { setPageState } from './slice';
import { ofType } from 'redux-observable';
import { finishNavigation } from 'routing/slice';

const generalEpic: Epic = (action$, state$, deps) => {
  return action$.pipe(
    ofType(finishNavigation.type),
    map(ac => setPageState(ac.payload.handlerResult)),
  );
};

export default generalEpic;
