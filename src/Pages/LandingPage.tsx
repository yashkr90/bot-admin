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
  return (
    <div>
      <div>LandingPage</div>
      <ApiInput />
      <Tables />
    </div>
  );
};

export default LandingPage;
