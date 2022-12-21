import React from "react";
import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../config/authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

const AzureProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return <MsalProvider instance={msalInstance}>{props.children}</MsalProvider>;
};

export default AzureProvider;
