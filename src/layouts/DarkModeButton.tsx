import { useEffect } from "react";

import useTheme from "../hooks/useTheme";

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
        <img
          src="./moon-fill.svg"
          alt="Dark mode enabled"
          className="mr-2 md:w-5 md:h-5"
        />
      ) : (
        <img
          src="./moon-stroke.svg"
          alt="Dark mode disabled"
          className="mr-2 md:w-5 md:h-5"
        />
      )}
      <span className="text-xs md:text-base font-semibold">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
