import { configureStore } from '@reduxjs/toolkit';
import { Epic, createEpicMiddleware } from 'redux-observable';
import reducers from './reducers';
import { rootEpic } from './epics';
import { PageActionType, PageStateType } from 'pages/types';

const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([epicMiddleware]),
});

export type State = typeof store.getState;

export type AppEpic = Epic<PageActionType, PageActionType, PageStateType, any>;

// for now redux-observable typing works not really well
// ts-ignore should be removed after https://github.com/redux-observable/redux-observable/issues/706 closed
//@ts-ignore
epicMiddleware.run(rootEpic);

export default store;