import React from "react";
import Loading from "../components/Loading";
import { useMicrosoftProfile } from "../hooks/useMicrosoftProfile";
import { useQueryRoomId } from "../hooks/useQueryRoomId";
import { MicrosoftProfile } from "../interfaces/MicrosoftProfile";

const Room: React.FC = () => {
  const { profile } = useMicrosoftProfile();
  const { roomId } = useQueryRoomId(profile as MicrosoftProfile);

  return (
    <div className="min-h-screen justify-center items-center border-2">
      <Loading className="w-100" />
    </div>
  );
};

export default Room;
