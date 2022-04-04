import React, { useState } from "react";
import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";
import "./Kickickz.css";

export const Kickickz = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem("Kickickz_customer") !== null
  );

  const setAuthUser = (user) => {
    sessionStorage.setItem("Kickickz_customer", JSON.stringify(user));
    setIsAuthenticated(sessionStorage.getItem("Kickickz_customer") !== null);
  };

  const clearUser = () => {
    sessionStorage.clear();
    setIsAuthenticated(sessionStorage.getItem("Kickickz_customer") !== null);
  };

  return (
    <>
      <NavBar clearUser={clearUser} isAuthenticated={isAuthenticated} />
      <ApplicationViews
        setAuthUser={setAuthUser}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </>
  );
};
