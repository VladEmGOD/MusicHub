import { Handler } from "routing/types";
import { of } from "rxjs";
import { HomePageState } from "./slice";

export const handler: Handler<HomePageState> = () => {
  return of({ value: 999 });
};
