import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { fetchCheckRoom } from "../api/fetchCheckRoom";
import { socket } from "../config/socketConfig";
import { MicrosoftProfile } from "../interfaces/MicrosoftProfile";

export const useQueryRoomId = (profile: MicrosoftProfile) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [roomId, setRoomId] = useState<string>("");

  useEffect(() => {
    const query = searchParams.get("q");
    if (!query) {
      navigate("/");
    } else {
      async function checkRoom() {
        const res = await fetchCheckRoom(query as string);
        console.log(res.status);

        if (res.status) {
          socket.emit("enqueue", { ...profile, roomId: query });
          sessionStorage.setItem("roomId", query as string);
          navigate("/dashboard");
        } else {
          navigate("/notfound");
        }
      }

      checkRoom();

      setRoomId(query);
    }
  }, [searchParams, navigate]);

  return { roomId };
};
