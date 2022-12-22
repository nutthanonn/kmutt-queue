import axios from "axios";

export const getRoomData = async () => {
  const queue = {
    totalQueue: 0,
    myQueue: 0,
  };

  const res = await axios.get(
    "https://kmutt-queue-backend.onrender.com/api/room/" +
      sessionStorage.getItem("roomId")
  );

  if (res.data) {
    res.data.data.map((item: any) => {
      if (item.user.id === Object.keys(sessionStorage)[1].split(".")[0]) {
        queue.myQueue = item.queue;
      }
    });
    queue.totalQueue = res.data.data.length;
  }

  return queue;
};
