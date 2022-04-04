import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Home } from "./Home";
import { DisplayKickzList } from "./components/displaykickz/DisplayKickzList";

export const ApplicationViews = ({ isAuthenticated, setIsAuthenticated }) => {
  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  const setAuthUser = (user) => {
    sessionStorage.setItem("kickickz_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("kickickz_customer") !== null);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/myCollection" element={<DisplayKickzList />} />

        <Route
          exact
          path="/login"
          element={<Login setAuthUser={setAuthUser} />}
        />

        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
};
