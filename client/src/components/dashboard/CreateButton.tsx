import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import Button from "../../common/Button";
import Typography from "../../common/Typography";

const CreateButton: React.FC = () => {
  return (
    <Button>
      <BiAddToQueue className="mx-2 dark:fill-light-50" />
      <Typography type="h5">Create Room</Typography>
    </Button>
  );
};

export default CreateButton;
