import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { MainContextStates } from "../contextAPI/MainContext";

const Private = () => {
  const { login } = useContext(MainContextStates);
  const navigate = useNavigate();
  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, [login]);
  return <Outlet />;
};

export default Private;
