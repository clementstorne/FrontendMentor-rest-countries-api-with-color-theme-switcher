import { useEffect } from "react";
import { IoMoonOutline } from "react-icons/io5";

const switchDarkMode = (e: React.MouseEvent<HTMLButtonElement>): void => {
  e.preventDefault;
  const isDarkModeEnabled: string | null = localStorage.getItem("darkMode");

  if (isDarkModeEnabled) {
    if (isDarkModeEnabled === "true") {
      localStorage.setItem("darkMode", "false");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("darkMode", "true");
      document.documentElement.classList.add("dark");
    }
  } else {
    localStorage.setItem("darkMode", "true");
    document.documentElement.classList.add("dark");
  }
};

const DarkModeButton = (): JSX.Element => {
  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      document.documentElement.classList.add("dark");
    }
  });

  return (
    <button
      className="flex flex-row flex-nowrap items-center"
      onClick={switchDarkMode}
    >
      <IoMoonOutline size={22} className="pr-2" />
      <span className="text-xs font-semibold">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
