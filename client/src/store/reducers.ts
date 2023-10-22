import { combineReducers } from '@reduxjs/toolkit';

import home from 'pages/home/behaviour/slice';
import albums from 'pages/albums/behaviour/slice';

const pageReducer = combineReducers({
  home,
  albums,
});

export default {
  page: pageReducer,
};
