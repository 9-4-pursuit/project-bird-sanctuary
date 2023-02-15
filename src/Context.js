import { createContext, useState } from "react";

export const Birds = createContext();

function Context({ children }) {
  const [birds, setBirds] = useState([]);
  return (
    <Birds.Provider value={{ birds, setBirds }}>{children}</Birds.Provider>
  );
}
export default Context;
