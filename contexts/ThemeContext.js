import { createContext, useState } from "react";

import React from "react";
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [isdark, setIsdark] = useState(
    JSON.parse(localStorage.getItem("themeMode"))
  );

  return (
    <ThemeContext.Provider value={[isdark, setIsdark]}>
      {children}
    </ThemeContext.Provider>
  );
}
