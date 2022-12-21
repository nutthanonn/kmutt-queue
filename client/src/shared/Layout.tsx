import React from "react";
import Navbar from "../components/Navbar";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <div className="dark:(bg-[#242424]) bg-[#ffffffde] min-h-[130vh]">
      <Navbar />
      <div className="px-10 py-40">{props.children}</div>
    </div>
  );
};

export default Layout;
