import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { routingReducer } from "routing";
import { createEpicMiddleware } from "redux-observable";
import pageRedusers from "pages/reducers";
import { appEpics } from "./appEpics";
import { Router } from "routing/createRouter";

const reducers = combineReducers({
  routing: routingReducer,
  page: pageRedusers
})

export type ApplicationState = ReturnType<typeof reducers>;

export const createStore = (router: Router) => {
  const epicMiddleware = createEpicMiddleware({
    dependencies: {}
  });

  const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat([epicMiddleware]),
  });

  //@ts-ignore
  epicMiddleware.run(appEpics(router));

  return store;
}
