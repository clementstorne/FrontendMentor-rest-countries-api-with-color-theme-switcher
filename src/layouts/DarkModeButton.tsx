import { useEffect } from "react";

import useTheme from "../hooks/useTheme";

import { IoMoon, IoMoonOutline } from "react-icons/io5";

const DarkModeButton = (): JSX.Element => {
  const { isDarkMode, toggleTheme } = useTheme();

  const handleOnClick = () => {
    toggleTheme();
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode === "true");
  }, [isDarkMode]);

  return (
    <button
      className="flex flex-row flex-nowrap items-center"
      onClick={handleOnClick}
    >
      {isDarkMode === "true" ? (
        <IoMoon className="mr-2 md:w-5 md:h-5" />
      ) : (
        <IoMoonOutline className="mr-2 md:w-5 md:h-5" />
      )}
      <span className="text-xs md:text-base font-semibold">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
