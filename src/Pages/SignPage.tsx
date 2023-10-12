import { GoogleLogin } from "@react-oauth/google";

import {  setuser } from "../api/api";
import jwt_decode from "jwt-decode";
import { UserContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";



const SignPage = () => {

  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse: any) => {
    console.log(credentialResponse);

    const decoded:object = jwt_decode(credentialResponse.credential);

    if (decoded) {

      console.log(decoded);

      setUser(decoded);

      const res = await setuser(decoded);
      console.log(res);
      
      navigate("/dashboard");


    }

  };
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => handleSuccess(credentialResponse)}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <div>{user ? "user" : "no user"}</div>

      {/* <Button onClick={loginGoogle}>google</Button> */}
    </div>
  );
};

export default SignPage;
