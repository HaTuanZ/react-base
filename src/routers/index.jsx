import routes from "./routers";
import { Route, Routes } from "react-router";
import { Navigate } from "react-router-dom";
function RequireAuth({ children, isRequired }) {
  if (!isRequired) {
    return children;
  }
  let user = null
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

const elementRouter = (element) => {
  return <RequireAuth isRequired={element.requireAuth}>
    {element.component}
  </RequireAuth>
}

const RouteApp = () => {
  return (
    <Routes history={history}>
      {routes.map((e, i) => {
        if (e.children) {
          return (
            <Route key={i} extra path={e.path} element={elementRouter(e)}>
              {e.children.map((child, childIndex) => (
                <Route
                  key={`c-${childIndex}`}
                  path={child.path}
                  element={
                    elementRouter(child)
                  }
                ></Route>
              ))}
            </Route>
          );
        }

        return (
          <Route key={i} path={e.path} extra element={elementRouter(e)}></Route>
        );
      })}
    </Routes>
  );
};

export default RouteApp;
