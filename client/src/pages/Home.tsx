import { useIsAuthenticated } from "@azure/msal-react";
import React, { useEffect } from "react";
import KMUTTLogo from "../assets/images/kmutt-logo.png";
import MicrosoftLogo from "../assets/images/microsoft-logo.png";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

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
        <Button onClick={handleSignIn}>
          <img
            src={MicrosoftLogo}
            width={20}
            className="inline-block mr-2"
            alt="Microsoft Logo"
          />
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Home;
