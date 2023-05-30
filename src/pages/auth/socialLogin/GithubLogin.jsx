import React from "react";
import { FaGithub } from "react-icons/fa";
import GitHubLogin from "react-github-login";
import axios from "axios";

const GithubLogin = () => {
  const onSuccessGithub = async (response) => {
    const { code } = response;
    console.log(code);

    try {
      const profileResponse = await axios.get("https://api.github.com/user", {
        headers: {
          Authorization: `Bearer <Github Personal Access Token>`,
          Accept: "application/json",
        },
      });

      const { name } = profileResponse.data;
      console.log("Name:", profileResponse);
    } 
    catch (error) {
      console.error("Error retrieving user profile:", error);
    }
  };

  const onFailure = async (error) => {
    console.log(error);
  };

  return (
    <div>
      <GitHubLogin
        clientId="1827557bb7505f35e055"
        onSuccess={onSuccessGithub}
        onFailure={onFailure}
        buttonText={<FaGithub />}
        className="github p-3 bg-white text-black text-lg cursor-pointer rounded-lg hover:bg-gray-200 hover:text-xl"
        valid={true}
        redirectUri="http://localhost:3000"
      />
    </div>
  );
};

export default GithubLogin;
