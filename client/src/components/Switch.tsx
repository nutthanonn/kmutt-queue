import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

interface SwitchProps {
  checked?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const [theme, setTheme] = useState<boolean>(false);

  const handleChangeTheme = () => {
    setTheme(!theme);
    localStorage.setItem("theme", theme ? "light" : "dark");
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme(true);
      document.body.classList.add("dark");
    } else {
      setTheme(false);
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <div onClick={handleChangeTheme}>
      <label
        htmlFor=""
        className="flex border-1 w-13 h-6 relative rounded-3xl items-center cursor-pointer bg-[#f1f1f1] dark:(bg-[#3a3a3a])"
      >
        <span
          className={`absolute rounded-full h-5 w-5 bg-white dark:bg-black mx-[2px] duration-200 ease flex shadow-lg border-[1px] dark:border-0 ${
            theme ? "transform translate-x-6.8" : ""
          }`}
        >
          {theme ? (
            <BsFillMoonFill className="m-auto p-0.5 fill-gray-500" />
          ) : (
            <BsFillSunFill className="m-auto p-0.5 fill-gray-600" />
          )}
        </span>
      </label>
    </div>
  );
};

export default Switch;
