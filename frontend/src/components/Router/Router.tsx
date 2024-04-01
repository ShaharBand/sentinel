import { map, values } from "lodash/fp";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoute } from "./functions";
import { PAGES } from "./constants";
import NotFound from "../../views/NotFound";

export const Router: FC = () => {
  const routes = map(createRoute, values(PAGES));

  return (
    <BrowserRouter>
      <Routes>
        {routes}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
