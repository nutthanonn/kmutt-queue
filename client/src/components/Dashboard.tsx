import React from "react";
import { useMicrosoftProfile } from "../hooks/useMicrosoftProfile";

const Dashboard: React.FC = () => {
  const { profile } = useMicrosoftProfile();

  return <div>{profile?.displayName}</div>;
};

export default Dashboard;
