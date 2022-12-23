import axios from "axios";
import { DEFAULT_API } from "./defaultAPI";

export const fetchCheckRoom = async (id: string) => {
  const { data } = await axios.get(`${DEFAULT_API}/api/check/` + id, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });

  return data;
};
