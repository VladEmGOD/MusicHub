import type { Reducer } from '@reduxjs/toolkit';

import general from './base/slice';
import home from 'pages/home/behaviour/slice';
import albums from 'pages/albums/behaviour/slice';

import { mergeRedusers } from 'store/utils';
import { PageState } from './types';

const pageReducer = mergeRedusers(
  general,
  home,
  albums,
) as Reducer<PageState>;

export default pageReducer;