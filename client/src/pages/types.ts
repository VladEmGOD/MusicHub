import { AlbumPageState, AlbumsPageAction } from 'pages/albums';
import { HomePageState, HomePageAction } from "pages/home";

export type PageStateType = HomePageState | AlbumPageState;
export type PageActionType = AlbumsPageAction | HomePageAction;
