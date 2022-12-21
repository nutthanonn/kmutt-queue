import React from "react";
import Avatar from "./Avatar";
import { v4 as uuidv4 } from "uuid";

interface QueueBlockProps {
  totalQueue: number;
  myQueue: number;
}

const QueueBlock: React.FC<QueueBlockProps> = (props) => {
  const { totalQueue, myQueue } = props;

  return (
    <div className="min-h-[40vh] border-1 mt-10 flex items-center px-20 overflow-auto">
      <div className="flex gap-x-10 items-center">
        {Array.from(Array(totalQueue).keys()).map((item) => {
          return <Avatar item={item + 1} myQueue={myQueue} key={uuidv4()} />;
        })}
      </div>
    </div>
  );
};

export default QueueBlock;
