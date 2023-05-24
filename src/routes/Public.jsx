import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MainContextStates } from "../contextAPI/MainContext";

const Public = () => {
  const { login } = useContext(MainContextStates);
  const navigate = useNavigate();
  useEffect(() => {
    if (login) {
      // navigate("/dashboard")
      console.log("Are You Logged In......")
    }
  }, [login]);
  return <Outlet />;
};

export default Public;
