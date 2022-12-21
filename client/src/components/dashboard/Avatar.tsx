import React from "react";
import { v4 as uuidv4 } from "uuid";
import {
  FaEarlybirds,
  FaPiggyBank,
  FaDog,
  FaDove,
  FaFemale,
  FaFrog,
  FaHorseHead,
  FaMeteor,
  FaPastafarianism,
  FaSnowman,
} from "react-icons/fa";
import Typography from "../../common/Typography";
import { BiBeenHere } from "react-icons/bi";

const Icon = [
  <FaPiggyBank size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaEarlybirds size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaDog size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaDove size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaFemale size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaFrog size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaHorseHead size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaMeteor size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaSnowman size={30} className="fill-light-50 dark:fill-[#213547]" />,
  <FaPastafarianism size={30} className="fill-light-50 dark:fill-[#213547]" />,
];

interface AvatarProps {
  item: number;
  myQueue: number;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { item, myQueue } = props;

  return (
    <div className="relative flex flex-col" key={uuidv4()}>
      <div
        className={`rounded-full flex items-center justify-center ${
          item === myQueue
            ? "bg-blue-500 w-20 h-20"
            : "bg-[#213547] dark:(bg-[#ffffff]) w-10 h-10 "
        } `}
      >
        {item === myQueue ? (
          <BiBeenHere size={40} className="fill-light-50" />
        ) : (
          Icon[Math.floor(Math.random() * Icon.length)]
        )}
      </div>
      <div
        className={`absolute bottom-[-40px] w-30 ${
          item === myQueue ? "left-[-5px]" : "left-3.5"
        }`}
      >
        <Typography type="p">
          {item === myQueue ? "You are here" : item}
        </Typography>
      </div>
    </div>
  );
};

export default Avatar;
