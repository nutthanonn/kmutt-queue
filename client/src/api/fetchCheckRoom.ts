import axios from "axios";

export const fetchCheckRoom = async (id: string) => {
  const { data } = await axios.get(
    "https://kmutt-queue-backend.onrender.com/api/check/" + id,
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  return data;
};
