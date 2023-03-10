import axios from "axios";
import { DEFAULT_API } from "./defaultAPI";

export const getRoomData = async () => {
  const queue = {
    totalQueue: 0,
    myQueue: 0,
  };

  const res = await axios.get(
    `${DEFAULT_API}/api/room/` + sessionStorage.getItem("roomId"),
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  if (res.data) {
    res.data.data.map((item: any) => {
      if (item.user.id === Object.keys(sessionStorage)[2].split(".")[0]) {
        queue.myQueue = item.queue;
      }
    });
    queue.totalQueue = res.data.data.length;
  }

  return queue;
};
