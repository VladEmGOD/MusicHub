import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type AlbumPageState = {
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

export default albumsSlice.reducer

