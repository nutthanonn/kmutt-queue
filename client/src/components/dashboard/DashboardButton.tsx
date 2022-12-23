import React from "react";
import Button from "../../common/Button";
import Typography from "../../common/Typography";
import { ImExit } from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";

interface DashboardButtonProps {
  onClick?: () => void;
  makeQueue?: boolean;
  handleExit?: () => void;
}

const DashboardButton: React.FC<DashboardButtonProps> = (props) => {
  const { makeQueue, onClick, handleExit } = props;

  console.log(makeQueue);

  return (
    <div>
      {makeQueue ? (
        <Button onClick={handleExit}>
          <ImExit className="mx-2 dark:fill-light-50" />
          <Typography type="h5">Exit Queue</Typography>
        </Button>
      ) : (
        <Button onClick={onClick}>
          <BiAddToQueue className="mx-2 dark:fill-light-50" />
          <Typography type="h5">Create Queue</Typography>
        </Button>
      )}
    </div>
  );
};

export default DashboardButton;
