import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");

  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    setMsg("");
    setMsgColor("");
    if (username === "" || password === "") {
      setMsg("Please enter your credentials properly.");
      setMsgColor("black");
      return false;
    }
    if (password.length < 8) {
      setMsg("Please enter minimum 8 digit password.");
      setMsgColor("black");
      return false;
    }
    const postData = {
      userName: username,
      passWord: password,
    };
    console.log(postData);
  };
  return (
    <>
      <div className="container bg-[url('https://c0.wallpaperflare.com/preview/402/256/841/3drender-abstract-square-background.jpg')] bg-opacity-0 h-screen grid place-items-center">
        <div className="login w-full bg-transparent sm:w-full md:w-3/4 lg:w-2/6 px-4 py-8 shadow-2xl shadow-sky-400 hover:shadow-sky-500 rounded-xl select-none opacity-95">
          <div className="head bg-orange-400 mx-2 text-center p-3 text-white font-black text-3xl font-serif rounded-t-lg">
            {" "}
            Login
            <p>
              <span className={`error text-sm text-${msgColor}`}>{msg}</span>
            </p>
          </div>
          <div className="body bg-gray-100 px-4 py-5 mx-2">
            <form onSubmit={(e) => submitLoginForm(e)}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Username
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#f9a100] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    @
                  </span>
                  <input
                    type="text"
                    id="usernamen"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>

                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    &#128274;
                  </span>
                  <input
                    type={passwordType}
                    id="password"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center mb-4">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={togglePassword}
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Show Password
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="my-2 px-8 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500 font-bold"
                >
                  Login Account
                </button>
              </div>
            </form>

            <div className="text-center my-3 font-bold">-- OR --</div>
            <div className="flex justify-evenly">
              <div
                className="google p-3 bg-rose-100 text-red-600 text-lg cursor-pointer rounded-lg hover:bg-rose-200 hover:text-red-700 hover:text-xl"
                title="Google Login"
              >
                {" "}
                <FaGoogle />{" "}
              </div>
              <div
                className="facebook p-3 bg-blue-500 text-white text-lg cursor-pointer rounded-lg hover:text-xl"
                title="Facebook Login"
              >
                {" "}
                <FaFacebook />{" "}
              </div>
              <div
                className="twitter p-3 bg-white text-blue-500 text-lg cursor-pointer rounded-lg hover:bg-gray-200 hover:text-blue-600 hover:text-xl"
                title="Twitter Login"
              >
                <FaTwitter />
              </div>
              <div
                className="github p-3 bg-white text-black text-lg cursor-pointer rounded-lg hover:bg-gray-200 hover:text-xl"
                title="Github Login"
              >
                {" "}
                <FaGithub />{" "}
              </div>
            </div>
          </div>
          <hr className="mx-2" />
          <div className="footer bg-gray-100 mx-2 text-gray-700 text-center px-4 py-2 font-light text-md font-mono rounded-b-lg">
            <div className="flex justify-between">
              <Link to="/register" className="hover:text-blue-700">
                Register New Account.
              </Link>
              <Link to="" className="hover:text-blue-700">
                Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
