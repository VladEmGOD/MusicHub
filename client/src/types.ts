import { RoutingAction, RoutingState } from './routing/slice';
import { PageAction, PageState } from "pages/types";
import { Epic as ReduxEpic } from "redux-observable";

export type ApplicationState<TPageState> = {
  page: TPageState
} & RoutingState;

export type ApplicationAction = PageAction | RoutingAction;

export type Epic = ReduxEpic<ApplicationAction, ApplicationAction, ApplicationState<PageState>, any>;
