import { GeneralPageState, GeneralPageAction } from './base/slice';
import { AlbumPageState, AlbumsPageAction } from 'pages/albums';
import { HomePageState, HomePageAction } from "pages/home";

export interface BasePageState { };

export type PageState = GeneralPageState | HomePageState | AlbumPageState;
export type PageAction = GeneralPageAction | AlbumsPageAction | HomePageAction;
