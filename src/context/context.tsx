import React from 'react';
import { ContextType } from '../types';

const createCtx = (): any => {
  const ctx = React.createContext<ContextType | undefined>(undefined);
  const useCtx = (): ContextType => {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  };
  return [useCtx, ctx.Provider];
};

const [useCtx, CtxProvider] = createCtx();

const AppContextProvider = ({ children }: any): JSX.Element | null => {
  const defaultValue = {};

  return <CtxProvider value={defaultValue}>{children}</CtxProvider>;
};

export { useCtx, AppContextProvider };
