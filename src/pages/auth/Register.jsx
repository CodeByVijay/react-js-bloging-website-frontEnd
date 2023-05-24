import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator";
import { FaLock, FaRegEnvelope, FaUser } from "react-icons/fa";
import FaceBookLogin from "./socialLogin/FaceBookLogin";
import TwitterLogin from "./socialLogin/TwitterLogin";
import GithubLogin from "./socialLogin/GithubLogin";
import GoogleLogin from "./socialLogin/GoogleLogin";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  const [passwordType, setPasswordType] = useState("password");
  const [emailError, setEmailError] = useState("");
  const [msg, setMsg] = useState("");
  const [msgColor, setMsgColor] = useState("");
  const [submitBtnDisable, setSubmitBtnDisable] = useState(true);

  const handleFullName = (e) => {
    const name = e.target.value;
    setFullName(name);
    if (
      name.length > 1 &&
      password === conPassword &&
      validator.isEmail(email)
    ) {
      setMsg("");
      setMsgColor("");
      setSubmitBtnDisable(false);
    } else if (name.length > 1) {
      setMsg("");
      setMsgColor("");
      setSubmitBtnDisable(true);
    } else {
      setMsg("Please enter valid name.");
      setMsgColor("black");
      setSubmitBtnDisable(true);
    }
  };

  const handleEmail = (e) => {
    let val = e.target.value;
    setEmail(val);

    if (!validator.isEmail(val) && val.length > 0) {
      setEmailError("Enter valid Email!");
      setSubmitBtnDisable(true);
    } else if (
      validator.isEmail(val) &&
      password.length > 7 &&
      conPassword > 7
    ) {
      setEmailError("");
      setSubmitBtnDisable(false);
    } else {
      setEmailError("");
      setSubmitBtnDisable(true);
    }
  };
  const handlePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
    if (
      pass.length > 7 &&
      pass === conPassword &&
      validator.isEmail(email) &&
      fullName.length > 1
    ) {
      setMsg("");
      setMsgColor("");
      setSubmitBtnDisable(false);
    } else if (pass !== conPassword && conPassword.length > 0) {
      setMsg("Please enter password and confirm password same.");
      setMsgColor("black");
      setSubmitBtnDisable(true);
    } else {
      setMsg("Please enter password minimum 8 digit.");
      setMsgColor("black");
      setSubmitBtnDisable(true);
    }
  };
  const handleConPassword = (e) => {
    const pass = e.target.value;
    setConPassword(pass);
    if (
      pass.length > 0 &&
      pass === password &&
      validator.isEmail(email) &&
      fullName.length > 1
    ) {
      setMsg("");
      setMsgColor("");
      setSubmitBtnDisable(false);
    } else if (pass !== password && password.length > 0) {
      setMsg("Please enter password and confirm password same.");
      setMsgColor("black");
      setSubmitBtnDisable(true);
    } else {
      setMsg("Please enter confirm password minimum 8 digit.");
      setMsgColor("black");
      setSubmitBtnDisable(true);
    }
  };

  const togglePassword = () => {
    passwordType === "password"
      ? setPasswordType("text")
      : setPasswordType("password");
  };
  return (
    <div>
      <div className="container bg-[url('https://c0.wallpaperflare.com/preview/402/256/841/3drender-abstract-square-background.jpg')] bg-opacity-0 h-screen grid place-items-center w-full sm:w-full lg:w-full md:w-full">
        <div className="register w-full bg-transparent sm:w-full md:w-3/4 lg:w-2/6 px-4 py-8 shadow-2xl shadow-sky-400 hover:shadow-sky-500 rounded-xl select-none opacity-95">
          <div className="head bg-orange-400 mx-2 text-center p-3 text-white font-black text-3xl font-sans rounded-t-lg">
            {" "}
            Register
            <p>
              <span className={`error text-sm text-${msgColor}`}>{msg}</span>
            </p>
          </div>
          <div className="body bg-gray-100 px-4 py-5 mx-2">
            <form action="">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="full_name"
                >
                  Full Name
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#f9a100] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    id="full_name"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none capitalize"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => handleFullName(e)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="username"
                >
                  Email
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#f9a100] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <FaRegEnvelope />
                  </span>
                  <input
                    type="email"
                    id="username"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none lowercase"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                  />
                </div>
                <span className={`error text-sm text-rose-600`}>
                  {emailError}
                </span>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>

                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#f9a100] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <FaLock />
                  </span>
                  <input
                    type={passwordType}
                    id="password"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => handlePassword(e)}
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="con_password"
                >
                  Confirm Password
                </label>

                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-[#f9a100] bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                    <FaLock />
                  </span>
                  <input
                    type={passwordType}
                    id="con_password"
                    className="rounded-none rounded-r-lg bg-gray-50 border text-gray-700 focus:ring-1 focus:ring-blue-500 focus:outline-none block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:outline-none"
                    placeholder="Confirm Password"
                    value={conPassword}
                    onChange={(e) => handleConPassword(e)}
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
                  type="button"
                  className={`my-2 px-8 py-2 ${
                    submitBtnDisable ? `bg-gray-400` : `bg-orange-400`
                  }  text-white rounded-xl  ${
                    submitBtnDisable
                      ? `hover:bg-gray-500`
                      : `hover:bg-orange-500`
                  } font-bold`}
                  disabled={submitBtnDisable}
                >
                  Register Account
                </button>
              </div>
            </form>

            <div className="text-center my-3 font-bold">-- OR --</div>
            <div className="flex justify-evenly">
              <GoogleLogin />
              <FaceBookLogin />
              <TwitterLogin />
              <GithubLogin />
            </div>
          </div>
          <hr className="mx-2" />
          <div className="footer bg-gray-100 mx-2 text-gray-700 text-center px-4 py-2 font-light text-md font-serif rounded-b-lg">
            If you have already registered &nbsp;--&nbsp;
            <Link
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-mono"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
