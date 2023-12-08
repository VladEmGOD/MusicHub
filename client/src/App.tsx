import { PageRoutes } from "routing/pageRoutes";
import { useDispatch } from "react-redux";
import { navigateTo } from "routing/slice";
import { useAppSelector } from "store/hooks";
import { PathNames } from "routing/pathNames";

export const App = () => {
  const { current } = useAppSelector(s => s.routing);
  const dispatch = useDispatch();
  const path = current?.pathname ?? PathNames.Home;

  let routeObject = PageRoutes[path];

  if (!routeObject)
    routeObject = PageRoutes[PathNames.NotFound];

  const Page = routeObject.element;

  return <>
    <Page />
    <button onClick={() => dispatch(navigateTo({ pathname: '/' }))}> change to app</button>
    <button onClick={() => dispatch(navigateTo({ pathname: '/albums' }))}> change to albums</button>
  </>
}
