import { useEffect, useState } from "react";

export const useInQueue = () => {
  const [inQueue, setInQueue] = useState({
    totalQueue: 0,
    myQueue: 0,
  });

  useEffect(() => {
    const fetchQueue = async () => {
      const res = await fetch(
        "http://localhost:8000/api/room?roomId=" +
          sessionStorage.getItem("roomId")
      );
      const data = await res.json();
      console.log(data);
      if (data) {
        data.data.map((item: any) => {
          if (item.user.id === Object.keys(sessionStorage)[1].split(".")[0]) {
            setInQueue({ ...inQueue, myQueue: item.queue });
          }
        });
      }
      setInQueue({ ...inQueue, totalQueue: data.data.length });
    };
    fetchQueue();
  }, []);

  return { inQueue };
};
