import axios from "axios";

export const fetchCheckRoom = async (id:string) => {
  const { data } = await axios.get(
    "http://localhost:8000/api/check/" + id
  );

  return data;
};
