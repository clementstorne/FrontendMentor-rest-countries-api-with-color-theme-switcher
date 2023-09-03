import { useEffect, useState } from "react";
import { IoMoonOutline, IoMoonSharp } from "react-icons/io5";

const DarkModeButton = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode"));

  const switchDarkMode = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault;
    const isDarkModeEnabled: string | null = localStorage.getItem("darkMode");

    if (isDarkModeEnabled) {
      if (isDarkModeEnabled === "true") {
        localStorage.setItem("darkMode", "false");
        document.documentElement.classList.remove("dark");
        setDarkMode("false");
      } else {
        localStorage.setItem("darkMode", "true");
        document.documentElement.classList.add("dark");
        setDarkMode("true");
      }
    } else {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
      setDarkMode("true");
    }
  };

  useEffect(() => {
    if (darkMode === "true") {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <button
      className="flex flex-row flex-nowrap items-center"
      onClick={switchDarkMode}
    >
      {darkMode === "true" ? (
        <IoMoonSharp className="h-6 w-6 md:h-7 md:w-7 pr-2" />
      ) : (
        <IoMoonOutline className="h-6 w-6 md:h-7 md:w-7 pr-2" />
      )}
      <span className="text-xs md:text-base font-semibold">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
