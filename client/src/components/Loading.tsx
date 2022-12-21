import React from "react";
import Lottie from "lottie-react";
import wave from "../assets/lottie/material-wave.json";

interface LoadingProps {
  className?: string;
}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div {...props}>
      <Lottie animationData={wave} />
    </div>
  );
};

export default Loading;
