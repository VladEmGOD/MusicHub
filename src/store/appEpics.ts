import { rootPagesEpic } from "pages/epics";
import { combineEpics } from "redux-observable";
import { Router } from "routing/createRouter";
import createRoutingEpic from "routing/epic";

export const appEpics = (router: Router) => combineEpics(
  rootPagesEpic,
  createRoutingEpic(router),
)
