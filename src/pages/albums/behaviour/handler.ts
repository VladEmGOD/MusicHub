import { Handler } from "routing/types";
import { of } from "rxjs";
import { AlbumPageState } from "./slice";

export const handler: Handler<AlbumPageState> = () => {
  return of({ albums: "asdasd" });
};