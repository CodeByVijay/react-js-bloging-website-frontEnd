import { React, createContext, useState } from "react";
export const MainContextStates = createContext();

const MainContext = (props) => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);
  const [login, setLogin] = useState(false);
  return (
    <div>
      <MainContextStates.Provider
        value={{ user, setUser, profile, setProfile, login, setLogin }}
      >
        {props.children}
      </MainContextStates.Provider>
    </div>
  );
};

export default MainContext;
