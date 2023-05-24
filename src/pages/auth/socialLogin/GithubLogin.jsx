import React from "react";
import { FaGithub} from "react-icons/fa";

const GithubLogin = () => {
  return (
    <div>
      <div
        className="github p-3 bg-white text-black text-lg cursor-pointer rounded-lg hover:bg-gray-200 hover:text-xl"
        title="Github Login"
      >
        {" "}
        <FaGithub />{" "}
      </div>
    </div>
  );
};

export default GithubLogin;
