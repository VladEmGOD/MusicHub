import { AnyAction } from "@reduxjs/toolkit";
import { BasePageState, PageState } from "../types";

export type GeneralPageState = BasePageState;

const initialState: GeneralPageState = {
};

export const SET_PAGE_STATE = "page/setPageState";
export const setPageState = (pageState: PageState) => ({
  type: SET_PAGE_STATE,
  payload: pageState,
}) as AnyAction;

export type GeneralPageAction = ReturnType<typeof setPageState>;

const baseReducer = (state = initialState, action: GeneralPageAction) => {
  switch (action.type) {
    case SET_PAGE_STATE: {
      return { ...action.payload }
    }
    default:
      return state
  }
}

export default baseReducer;
