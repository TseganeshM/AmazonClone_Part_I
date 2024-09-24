import React, { createContext, useContext, useState } from "react";

const colorContet = createContext();

export const useColor = () => {
  return useContext(colorContet);
};

export const ThemeProider = ({ children }) => {
  const [color, setColor] = useState("light");
  const colorToggler = () => {
    setColor((pre) => (pre === "light" ? `dark` : `light`));
  };
  return (
    <colorContet.Provider value={{ color, colorToggler }}>
      {children}
    </colorContet.Provider>
  );
};
