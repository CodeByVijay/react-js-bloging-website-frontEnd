import { React, useEffect, useContext } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import { MainContextStates } from "../../../contextAPI/MainContext";
import { FaGoogle } from "react-icons/fa";

const GoogleLogin = () => {
  const { user, setUser, profile, setProfile, login, setLogin } =
    useContext(MainContextStates);
  const [accessToken, setAccessToken] = useCookies(["accessToken"]);

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      let expires = new Date();
      expires.setTime(expires.getTime() + 1 * 60 * 60 * 1000);
      setAccessToken("user", codeResponse, {
        path: "/",
        expires,
      });
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user.length !== 0) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          let expires = new Date();
          expires.setTime(expires.getTime() + 1 * 60 * 60 * 1000);
          setAccessToken("access_token", user.access_token, {
            path: "/",
            expires,
          });
          setAccessToken("user_data", res.data, {
            path: "/",
            expires,
          });
          setLogin(true);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  return (
    <div>
      <div
        className="google p-3 bg-rose-100 text-red-600 text-lg cursor-pointer rounded-lg hover:bg-rose-200 hover:text-red-700 hover:text-xl"
        title="Google Login"
        onClick={() => googleLogin()}
      >
        {" "}
        <FaGoogle />{" "}
      </div>
    </div>
  );
};

export default GoogleLogin;
