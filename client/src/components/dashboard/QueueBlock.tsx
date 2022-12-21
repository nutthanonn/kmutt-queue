import React from "react";
import Avatar from "./Avatar";

const QueueBlock: React.FC = () => {
  const myQueue: number = 3;

  return (
    <div className="min-h-[40vh] border-1 mt-10 flex items-center px-20 overflow-auto">
      <div className="flex gap-x-10 items-center">
        {Array.from(Array(30).keys()).map((item) => {
          return <Avatar item={item} myQueue={myQueue} />;
        })}
      </div>
    </div>
  );
};

export default QueueBlock;
