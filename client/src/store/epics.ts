import homeEpic from 'pages/home/behaviour/epic';
import albumsEpic from 'pages/albums/behaviour/epic';

import { combineEpics } from 'redux-observable';

export const rootEpic = combineEpics(
  homeEpic,
  albumsEpic,
);
