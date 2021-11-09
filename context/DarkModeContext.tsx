import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface DarkModeContextProviderProps {
  children: ReactNode;
}

interface DarkModeContext {
  dark: boolean;
  setDarkState: () => void;
}

export const DarkModeContext = createContext({} as DarkModeContext);

export const DarkModeStorage = ({ children }: DarkModeContextProviderProps) => {
  const [dark, setDark] = useState(true);

  function setDarkState() {
    setDark(!dark);
    window.localStorage.setItem("dark", JSON.stringify(!dark));
  }

  useEffect(() => {
    if (dark === true) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [dark]);

  useEffect(() => {
    const darkMode = window.localStorage.getItem("dark");
    if (darkMode) {
      const darkBoolean = JSON.parse(darkMode);
      setDark(darkBoolean);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ dark, setDarkState }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => {
    return useContext(DarkModeContext)
}