import { useMsal } from "@azure/msal-react";

const handleSignOut = () => {
  const { instance } = useMsal();

  instance.logoutRedirect({
    postLogoutRedirectUri: "/",
  });
};

export default handleSignOut;
