import React, { useContext, useEffect, useState } from "react";
import Tables from "../Components/Tables";
import { useNavigate } from "react-router-dom";
import ApiInput from "../Components/ApiInput";
import { UserContext } from "../App";

const LandingPage = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const checkuser = async () => {
      // const user = await getUser();

      if (!user) {
        navigate("/");
      }
    };

    checkuser();
  });
 // @ts-ignore
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="my-3 mx-2">
        <div className="d-flex justify-content-between">
        
          <span className="fs-4 text-info">{
          // @ts-ignore
          user.name.toUpperCase()}</span>
          <div style={{borderRadius: '50%'}}>

          <img
            style={{border: '2px solid red '}}
            src={
              // @ts-ignore
              user.picture}
            alt="userImage"
            height={"40px"}
            width={"40px"}
            />
            </div>
        </div>
        <div className="my-3">
          <ApiInput />
        </div>
        <Tables />
      </div>
    </div>
  );
};

export default LandingPage;
