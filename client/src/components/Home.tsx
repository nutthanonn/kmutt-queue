import { useIsAuthenticated } from "@azure/msal-react";
import React, { useEffect } from "react";
import KMUTTLogo from "../assets/images/kmutt-logo.png";
import MicrosoftLogo from "../assets/images/microsoft-logo.png";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const { instance } = useMsal();

  useEffect(() => {
    if (isAuth) {
      navigate("/dashboard");
    }
  }, [navigate, isAuth]);

  const handleSignIn = () => {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  };

  return (
    <div className="flex justify-center min-h-screen items-center flex-col">
      <img src={KMUTTLogo} width={150} />
      <div>
        <button
          onClick={handleSignIn}
          className="mx-2 border-[0.5px]  hover:(border-[#9499ff]) px-5 py-2 duration-[250ms] ease rounded-md"
        >
          <img
            src={MicrosoftLogo}
            width={20}
            className="inline-block mr-2"
            alt="Microsoft Logo"
          />
          Sign In
        </button>
        {/* {isAuth && (
          <button
            onClick={() => instance.logoutRedirect()}
            className="mx-2 border-[0.5px]  hover:(border-[#9499ff]) px-5 py-2 duration-[250ms] ease rounded-md"
          >
            <img
              src={MicrosoftLogo}
              width={20}
              className="inline-block mr-2"
              alt="Microsoft Logo"
            />
            Sign Out
          </button>
        )} */}
      </div>
    </div>
  );
};

export default Home;
