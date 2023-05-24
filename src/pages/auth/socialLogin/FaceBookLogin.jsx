import React from "react";
import { FaFacebook } from "react-icons/fa";

const FaceBookLogin = () => {
  return (
    <div>
      <div
        className="facebook p-3 bg-blue-500 text-white text-lg cursor-pointer rounded-lg hover:text-xl"
        title="Facebook Login"
      >
        {" "}
        <FaFacebook />{" "}
      </div>
    </div>
  );
};

export default FaceBookLogin;
