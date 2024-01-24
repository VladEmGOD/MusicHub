import { Observable } from "rxjs"

export type NavigationData = {
  params: Record<string, unknown>;
};

export type Handler<TResultState> = () => Observable<TResultState>;
