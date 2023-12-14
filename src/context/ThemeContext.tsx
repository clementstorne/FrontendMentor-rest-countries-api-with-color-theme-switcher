import { PropsWithChildren, createContext, useState } from "react";

type ThemeContextType = {
  isDarkMode: string;
  toggleTheme: () => void;
};

const defaultValue: ThemeContextType = {
  isDarkMode: "false",
  toggleTheme: () => {},
};

export const ThemeContext = createContext<ThemeContextType>(defaultValue);

export default function ThemeProvider({ children }: PropsWithChildren) {
  const prefersDarkMode: string = localStorage.getItem("darkMode")
    ? localStorage.getItem("darkMode")!
    : "false";

  const [isDarkMode, setIsDarkMode] = useState(prefersDarkMode);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !(prevMode === "true");
      localStorage.setItem("darkMode", newMode.toString());
      return newMode.toString();
    });
  };

  const contextValue = {
    isDarkMode,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
