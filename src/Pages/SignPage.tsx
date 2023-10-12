import { GoogleLogin } from "@react-oauth/google";

import { setuser } from "../api/api";
import jwt_decode from "jwt-decode";
import { UserContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignPage = () => {
  const { user, setUser } = useContext(UserContext);

  const navigate = useNavigate();
  console.log(user);

  const handleSuccess = async (credentialResponse: any) => {
    console.log(credentialResponse);

    const decoded: object = jwt_decode(credentialResponse.credential);

    if (decoded) {
      console.log(decoded);

      setUser(decoded);

      const res = await setuser(decoded);
      console.log(res);

      navigate("/dashboard");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className=" p-5 bg-dark-subtle rounded-3">
        <GoogleLogin
          onSuccess={(credentialResponse) => handleSuccess(credentialResponse)}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <div >
          {user && (
            <div className="d-flex justify-content-center  align-items-center gap-3">
              <div>

             
              {
              // @ts-ignore
              user.name}
               </div>
              
              <img 
              height={"40px"}
              width={"40px"}
              style={{border: '2px solid white ', borderRadius:"50%"}} src={
                // @ts-ignore
                user.picture} alt="userImage" />
            </div>
          )}
        </div>
      </div>
      {/* <Button onClick={loginGoogle}>google</Button> */}
    </div>
  );
};

export default SignPage;
