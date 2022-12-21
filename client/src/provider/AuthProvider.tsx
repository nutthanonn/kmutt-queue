import { useIsAuthenticated } from "@azure/msal-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AuthProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = useIsAuthenticated();
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  return <div>{props.children}</div>;
};

export default AuthProvider;
