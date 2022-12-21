import React, { useEffect, useState } from "react";
import { useMicrosoftProfile } from "../hooks/useMicrosoftProfile";
import Layout from "../shared/Layout";
import Header from "../components/dashboard/Header";
import DashboardButton from "../components/dashboard/DashboardButton";
import QueueBlock from "../components/dashboard/QueueBlock";
import CountQueue from "../components/dashboard/CountQueue";
import { CiSearch } from "react-icons/ci";
import Typography from "../common/Typography";
import { makeShortLink } from "../helper/makeShortLink";
import { v4 as uuidv4 } from "uuid";
import { socket } from "../config/socketConfig";
import { getRoomData } from "../api/getRoomData";
import { useInQueue } from "../hooks/useQueue";
import { Beforeunload } from "react-beforeunload";

const Dashboard: React.FC = () => {
  const { profile } = useMicrosoftProfile();
  const { inQueue } = useInQueue();

  const [copy, setCopy] = useState({
    isCopy: false,
    text: "",
  });
  const [queue, setQueue] = useState(inQueue);

  const [makeQueue, setMakeQueue] = useState<boolean>(queue.totalQueue > 0);

  useEffect(() => {
    socket.on("check_queue", async () => {
      const res = await getRoomData();
      setQueue(res);
    });
  }, [socket]);

  const handleMakeQueue = async () => {
    const uid = uuidv4();

    setCopy({
      isCopy: false,
      text: await makeShortLink(
        "https://kmutt-generate-queue.vercel.app/room?q=" + uid
      ),
    });

    sessionStorage.setItem("roomId", uid);

    socket.emit("enqueue", { ...profile, roomId: uid });

    setMakeQueue(true);
    setQueue({
      totalQueue: 1,
      myQueue: 1,
    });
  };

  const handleExit = () => {
    socket.emit("dequeue", {
      ...profile,
      id: sessionStorage.getItem("roomId"),
    });

    setMakeQueue(false);
    setQueue({
      totalQueue: 0,
      myQueue: 0,
    });
  };

  const handleCopy = () => {
    setCopy({
      ...copy,
      isCopy: true,
    });
    navigator.clipboard.writeText(copy.text);
  };

  return (
    <Layout>
      <Beforeunload onBeforeunload={() => "You will lose your queue!"} />
      <Header profile={profile} />
      <hr />
      {makeQueue ? (
        <div className="mt-10">
          <div className="flex items-center justify-between relative">
            <CountQueue myQueue={queue.myQueue} />
            <DashboardButton makeQueue={makeQueue} handleExit={handleExit} />
          </div>
          <QueueBlock {...queue} />
          <div className="text-center mt-10">
            <Typography type="h5">
              Invite your friends to join the queue by sharing this link{" "}
              <span className="text-sm">
                <strong>(click to copy)</strong>
              </span>
            </Typography>
            <Typography type="p">
              <span
                onClick={handleCopy}
                className={`${
                  copy.isCopy ? "text-green-500" : "text-blue-500"
                } cursor-pointer hover:underline`}
              >
                {copy.text}
              </span>
            </Typography>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-end item mt-10">
            <DashboardButton onClick={handleMakeQueue} />
          </div>
          <div className="flex items-center justify-center min-h-[60vh] flex-col gap-y-6">
            <CiSearch size={100} className="fill-[#213547] dark:fill-white" />
            <Typography type="h5">
              You are not in queue. Please click the button to create the queue.
            </Typography>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
