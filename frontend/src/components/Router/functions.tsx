import { Route } from "react-router-dom";

export const createRoute = ({
  path,
  element,
}: {
  path: string;
  element: JSX.Element;
}): JSX.Element => <Route key={path} path={path} element={element} />;
