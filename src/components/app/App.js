import React, { useEffect, useState } from "react";
import "./style.css";
import AppRouter from "../app-router/app-router";
import Nav from "../nav/nav";
import { BrowserRouter} from "react-router-dom";
import { AuthContext } from "../../context";

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("authorized")) {
      setIsAuthorized(true);
    }
    setIsloading(false);
  }, [])
  return (
    <div className="app">
      <AuthContext.Provider
        value={{
          isAuthorized,
          setIsAuthorized,
          isLoading
        }}
      >
        <BrowserRouter>
          <Nav></Nav>
          <AppRouter></AppRouter>
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
