import React, { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { MainContextStates } from "../contextAPI/MainContext";

const Public = () => {
  const { login } = useContext(MainContextStates);
  useEffect(() => {
    if (login) {
      // navigate("/dashboard")
      console.log("Are You Logged In......")
    }
  }, [login]);
  return <Outlet />;
};

export default Public;
