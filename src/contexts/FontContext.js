import { createContext, useContext, useState } from "react";

const FontContext = createContext();

export const useFontContext = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useFontContext must be used within a FontProvider");
  }

  return context;
};

export default function FontProvider({ children }) {
  const [font, setFont] = useState("font-serif");

  const changeFont = (newFont) => {
    if (newFont === font) {
      return;
    }

    setFont(newFont);
  };

  const values = {
    font,
    changeFont,
  };

  return <FontContext.Provider value={values}>{children}</FontContext.Provider>;
}
