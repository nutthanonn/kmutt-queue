import React from "react";
import Typography from "../../common/Typography";

interface CountQueueProps {
  myQueue: number;
}

const CountQueue: React.FC<CountQueueProps> = (props) => {
  return (
    <div className="px-20 inline-flex gap-10">
      <Typography type="h4">My Queue : {props.myQueue}</Typography>
    </div>
  );
};

export default CountQueue;
