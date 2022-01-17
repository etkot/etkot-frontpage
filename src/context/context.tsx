import React, { useContext, useState } from 'react';
import { ContextType } from '../types';

const Context = React.createContext<ContextType>({});
const useCtx = (): ContextType => useContext(Context);

const AppContextProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);

  const defaultValue = {
    menuOpen,
    setMenuOpen,
  };

  return <Context.Provider value={defaultValue}>{children}</Context.Provider>;
};

export { useCtx, AppContextProvider };
