import { AnyAction, Reducer } from "@reduxjs/toolkit";

export function mergeRedusers(...redusers: Reducer[]) {
  return (state: any, action: AnyAction) => redusers.reduce((s, r) => r(s, action), state)
}