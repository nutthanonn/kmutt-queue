import React from "react";
import Switch from "./Switch";
import WebsiteLogo from "../assets/website-logo.png";
import MicrosoftLogo from "../assets/images/microsoft-logo.png";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import Typography from "../common/Typography";
import Button from "../common/Button";

const Navbar: React.FC = () => {
  const isAuth = useIsAuthenticated();
  const { instance } = useMsal();

  return (
    <div className="nav min-h-10 flex items-center fixed top-0 z-10 w-full justify-between px-10">
      <div>
        <img src={WebsiteLogo} width={120} />
      </div>
      <div className="inline-flex items-center">
        <Switch />
        {isAuth && (
          <Button onClick={() => instance.logoutRedirect()}>
            <img
              src={MicrosoftLogo}
              width={20}
              className="mr-2"
              alt="Microsoft Logo"
            />
            <Typography type="p">Sign Out</Typography>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
