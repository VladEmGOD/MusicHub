import { Handler } from "routing/types";
import { of } from "rxjs";
import { NotFoundPageState } from "./slice";

export const handler: Handler<NotFoundPageState> = () => {
  return of({ value: 999 });
};