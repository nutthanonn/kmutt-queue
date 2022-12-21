import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="mx-2 border-[0.5px] hover:(border-[#9499ff]) px-5 py-2 duration-[250ms] ease rounded-md flex items-center"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
