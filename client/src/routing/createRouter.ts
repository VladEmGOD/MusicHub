import { History, To, Update } from "history";
import { Observable, share } from "rxjs";

export const createRouter = (history: History) => {
  const historyUpdate$ = new Observable<Update>(subscriber => {
    history.listen(update => subscriber.next(update))
  }).pipe(share());

  return Object.freeze({
    get historyUpdate$() {
      return historyUpdate$
    },
    get location() {
      return history.location
    },
    forward: () => history.forward(),
    back: () => history.back(),
    go: (delta: number) => history.go(delta),
    push: (to: To, state?: any) => history.push(to, state),
    replace: (to: To, state?: any) => history.replace(to, state),
    createHref: (to: To) => history.createHref(to),
  })
};

export type Router = ReturnType<typeof createRouter>;