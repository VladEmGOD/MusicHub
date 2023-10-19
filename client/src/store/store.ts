import { Action, AnyAction, configureStore } from '@reduxjs/toolkit';
import { StateObservable, createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { rootEpic } from './epics';
import { Observable } from 'rxjs';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: [epicMiddleware],
});

export type State = typeof store.getState;

export type Epic<TAction extends Action<any>> = (
  action$: Observable<TAction>,
  state$: StateObservable<State>,
  dependencies: any
) => Observable<TAction>;

// for now redux-observable typing works not really well
// ts-ignore should be removed after https://github.com/redux-observable/redux-observable/issues/706 closed
//@ts-ignore
epicMiddleware.run(rootEpic);

export default store;