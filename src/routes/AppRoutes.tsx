import { Route, Routes } from "react-router-dom";
import { app_routes } from "./routes";

export const AppRoutes = () => {
  return (
    <Routes>
      {app_routes.map((item, index) => (
        <Route
          key={`route_${item.path}_${index}`}
          path={item.path}
          element={item.element}
        />
      ))}
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  );
};
