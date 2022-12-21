import axios from "axios";

export const callMsGraph = async (accessToken: string) => {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const response = await axios.get("https://graph.microsoft.com/v1.0/me", {
    headers,
  });

  return response.data;
};
