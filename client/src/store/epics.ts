import homeEpic from 'pages/home/behaviour/epic';
import albumsEpic from 'pages/albums/behaviour/epic';

import { combineEpics } from 'redux-observable';
import { AnyAction, } from '@reduxjs/toolkit';
import type { PageActionType, PageStateType } from '../pages/types'

// for now redux-observable typing works not really well
// ts-ignore should be removed after https://github.com/redux-observable/redux-observable/issues/706 closed
export const rootEpic = combineEpics(
  homeEpic,
  //@ts-ignore
  albumsEpic,
);
