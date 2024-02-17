// // ThemeContext.js
// import { createContext, useContext, useState, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedMode = localStorage.getItem('theme');
//     setIsDarkMode(savedMode === 'dark');
//   }, []);

//   const toggleMode = () => {
//     setIsDarkMode((prevMode) => !prevMode);
//   };

//   useEffect(() => {
//     document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
//     localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
//   }, [isDarkMode]);

//   return (
//     <ThemeContext.Provider value={{ isDarkMode, toggleMode }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);

// ThemeContext.js
import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Other theme properties can be added as needed
  const theme = {
    isDarkMode,
    toggleMode: () => setIsDarkMode((prevMode) => !prevMode),
    // Add more theme properties here
    // backgroundColor: isDarkMode ? "#1a1a1a" : "linear-gradient(to right, #f5dae2, #cad6e7)",
     backgroundColor: isDarkMode ? "#1a1a1a" : "white",
    textColor: isDarkMode ? "#ffffff" : "#000000",
    priceColor: isDarkMode ? "black" : "blue",
    supportColor : isDarkMode ? 'black' : 'black',
    // ... other properties
  };

  useEffect(() => {
    // Apply theme-related side effects (if any)
    document.body.style.background = theme.backgroundColor;
    document.body.style.color = theme.textColor;
    const elements = document.getElementsByClassName("price");
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.color = theme.priceColor;
    }
    const texts =  document.getElementsByClassName('support');
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.color = theme.supportColor;
    }
    // ... other side effects
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
