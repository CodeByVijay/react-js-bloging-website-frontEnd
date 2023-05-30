import React from "react";
import { FaFacebook } from "react-icons/fa";
import FacebookLogin from "react-facebook-login";

const FaceBookLogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  // 963358431476282
  return (
    <div>
      <FacebookLogin
        appId="963358431476282"
        fields="name,email,picture"
        cssClass="facebook p-3 bg-blue-500 text-white text-lg cursor-pointer rounded-lg hover:text-xl"
        icon={<FaFacebook />}
        textButton=""
        callback={responseFacebook}
      />
    </div>
  );
};

export default FaceBookLogin;
