import { createContext, useState } from "react";

const themes = {
  light: {
    backgroundColor: "rgb(245 245 245)",
    color: "rgb(51 65 85)",
  },
  dark: {
    backgroundColor: "rgb(51 65 85)",
    color: "rgb(245 245 245)",
  },
};

const ThemeContext = createContext({
  theme: {},
  toggleTheme() {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const toggleTheme = (selectedTheme) => {
    setTheme(themes[selectedTheme]);
  };
  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
export default ThemeContext;
