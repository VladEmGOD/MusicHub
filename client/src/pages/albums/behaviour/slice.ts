import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BasePageState } from "pages/types";

export type AlbumPageState = BasePageState & {
  albums: string,
}

const initialState: AlbumPageState = {
  albums: 'albums',
}

const albumsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    oneString: state => {
      state.albums = '1'
    },
    twoString: state => {
      state.albums = '2'
    },
    addToString: (state, action: PayloadAction<string>) => {
      state.albums += action.payload
    }
  }
})

export const { oneString, twoString, addToString } = albumsSlice.actions;

export type AlbumsPageAction =
  | ReturnType<typeof oneString>
  | ReturnType<typeof twoString>
  | ReturnType<typeof addToString>;

export type AlbumsPageA = typeof albumsSlice.actions


export default albumsSlice.reducer

