import { createContext, useContext, useState } from "react";

// 1. Create context
const ThemeContext = createContext();

// 2. Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark"); 

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Custom hook for easy access
export function useTheme() {
  return useContext(ThemeContext);
}
