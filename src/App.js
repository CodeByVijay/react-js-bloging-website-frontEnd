import React, { useContext, useEffect } from "react";
import Routers from "./routes/Routers";
import { MainContextStates } from "./contextAPI/MainContext";
import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const app_url = "http://localhost:3000/";
function App() {
  const { login, setLogin, setUser, setProfile } =
    useContext(MainContextStates);

  const access_token = cookies.get("access_token");
  const user_data = cookies.get("user_data");
  const userData = cookies.get("user");

  useEffect(() => {
    if (access_token !== undefined && access_token !== "undefined" && userData !== undefined && userData !== "undefined") {
      setLogin(true);
      setProfile(user_data)
      setUser(userData)
    } else {
      setLogin(false);
      setProfile([]);
      setUser([]);
    }
  }, [login]);
  return (
    <>
      <Routers />
    </>
  );
}

export default App;
