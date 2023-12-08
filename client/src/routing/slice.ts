import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Location, To } from "history";
import { PageState } from "pages/types";

export type RoutingState = {
  current?: Location;
  previous?: Location;
};

const initialState: RoutingState = {
  current: undefined,
  previous: undefined,
};

type NavigationData = {
  location: Location,
};

type ResultNavigationData = {
  handlerResult: PageState,
  location: Location,
};

export const counterSlice = createSlice({
  name: 'routing',
  initialState,
  reducers: {
    navigateTo: (state, action: PayloadAction<To>) => state,
    finishNavigation: (state, action: PayloadAction<ResultNavigationData>) => {
      state.current = action.payload.location;
    },
    startNavigation: (state, action: PayloadAction<NavigationData>) => { },
    back: (state) => state,
    forward: (state) => state,
    setRoutingState: (state) => state,
  }
})

export const { back, forward, navigateTo, finishNavigation, startNavigation } = counterSlice.actions;

export type RoutingAction =
  | ReturnType<typeof navigateTo>
  | ReturnType<typeof finishNavigation>
  | ReturnType<typeof startNavigation>
  | ReturnType<typeof forward>
  | ReturnType<typeof back>;

export default counterSlice.reducer;
