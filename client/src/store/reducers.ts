import { combineReducers } from '@reduxjs/toolkit'

import homeReducer from 'pages/home/behaviour/slice'
import albums from 'pages/albums/behaviour/slice'

const pageReducer = combineReducers({
  homeReducer,
  albums,
});

export default {
  page: pageReducer,
}