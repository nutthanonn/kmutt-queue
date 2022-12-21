import React from "react";

interface TypographyProps {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = (props) => {
  const { type } = props;

  switch (type) {
    case "h1":
      return (
        <h1 className="text-4xl text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h1>
      );
    case "h2":
      return (
        <h2 className="text-3xl text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-2xl text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h3>
      );
    case "h4":
      return (
        <h4 className="text-xl text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h4>
      );
    case "h5":
      return (
        <h5 className="text-lg text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h5>
      );
    case "h6":
      return (
        <h6 className="text-base text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </h6>
      );
    case "p":
      return (
        <p className="text-sm text-[#213547] dark:(text-[#ffffff]) font-bold">
          {props.children}
        </p>
      );
    default:
      return (
        <p className="text-sm text-[#213547] dark:(text-[#ffffff])">
          {props.children}
        </p>
      );
  }
};

export default Typography;
