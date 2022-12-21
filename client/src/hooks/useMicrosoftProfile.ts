import { useEffect, useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";
import { callMsGraph } from "../api/callMsGraph";
import { useNavigate } from "react-router-dom";
import { MicrosoftProfile } from "../interfaces/MicrosoftProfile";

export const useMicrosoftProfile = () => {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal();
  const [profile, setProfile] = useState<MicrosoftProfile>();

  useEffect(() => {
    function RequestProfileData() {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: accounts[0],
        })
        .then((response) => {
          callMsGraph(response.accessToken)
            .then((response) => {
              setProfile(response);
            })
            .catch(() => {
              navigate("/");
            });
        })
        .catch(() => {
          navigate("/");
        });
    }

    RequestProfileData();
  }, [navigate, instance, accounts]);

  return { profile };
};
