import React from "react";
import AzureProvider from "./AzureProvider";

const AppProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  return <AzureProvider>{props.children}</AzureProvider>;
};

export default AppProvider;
