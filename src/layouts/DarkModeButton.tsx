import { useEffect, useState } from "react";

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
