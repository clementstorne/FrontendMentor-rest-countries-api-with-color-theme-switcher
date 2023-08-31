import { useEffect } from "react";
import { BsMoon } from "react-icons/bs";

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

const DarkModeButton = () => {
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
      <BsMoon size={22} className="pr-2" />
      <span className="text-xs font-semibold">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
