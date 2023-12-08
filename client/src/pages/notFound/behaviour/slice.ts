import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type NotFoundPageState = {
  value: number;
};

const initialState: NotFoundPageState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export type NotFoundPageAction =
  | ReturnType<typeof increment>
  | ReturnType<typeof decrement>
  | ReturnType<typeof incrementByAmount>;

export default counterSlice.reducer;

