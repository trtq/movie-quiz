import { useContext } from 'react';
import { storeContext } from './StoreProvider';

export const useStore = () => {
  const store = useContext(storeContext);
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.');
  }
  return store;
};
