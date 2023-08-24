import React, { useContext } from "react";
import "./style.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../router/routes";
import { AuthContext } from "../../context";
import Loader from "../ui/loader/loader";

function AppRouter() {
  const {isAuthorized, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <Loader />
    )
  }
  return (
    <div>
      {isAuthorized
        ?<Routes>
          {privateRoutes.map(route =>
            <Route element={route.element} path={route.path}></Route>
          )}
          <Route path="*" element={<Navigate to="/posts" />}></Route>
          </Routes>
        :<Routes>
          {publicRoutes.map(route =>
              <Route element={route.element} path={route.path}></Route>
          )}
          <Route path="*" element={<Navigate to="/login" />}></Route>
        </Routes>
}
    </div>
  )
}

export default AppRouter;
