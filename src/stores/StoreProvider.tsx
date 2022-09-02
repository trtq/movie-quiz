import { useLocalObservable } from 'mobx-react-lite';
import React, { ReactNode } from 'react';
import { TGameStore, createGameStore } from './GameStore/GameStore';

export const storeContext = React.createContext<{ gameStore: TGameStore } | null>(null);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const gameStore = useLocalObservable(createGameStore);
  const rootStore = {
    gameStore,
  };
  return <storeContext.Provider value={rootStore}>{children}</storeContext.Provider>;
};
