import axios from "axios";

export const getRoomData = async () => {
  const queue = {
    totalQueue: 0,
    myQueue: 0,
  };

  const res = await axios.get(
    "http://localhost:8000/api/room?roomId=" + sessionStorage.getItem("roomId")
  );

  console.log(res.data);

  if (res.data) {
    res.data.data.map((item: any) => {
      if (item.user.id === Object.keys(sessionStorage)[1].split(".")[0]) {
        queue.myQueue = item.queue;
      }
    });
  }

  queue.totalQueue = res.data.data.length;

  return queue;
};
