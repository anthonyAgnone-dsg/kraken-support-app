/* eslint-disable react/prop-types */
import { createContext, useCallback, useRef } from 'react';

import data from '../data.json';

export const UnecesssaryContext = createContext(null);

function useStoreData() {
  const store = useRef(data);
  const get = useCallback(() => store.current, []);
  const subscribers = useRef(new Set());
  const set = useCallback((value) => {
    store.current = value;
    subscribers.current.forEach((callback) => callback());
  }, []);
  const subscribe = useCallback((callback) => {
    subscribers.current.add(callback);
    return () => subscribers.current.delete(callback);
  }, []);
  return {
    get,
    set,
    subscribe,
  };
}

const UnecesssaryContextProvider = ({ children }) => {
  const dataStore = useStoreData();
  return <UnecesssaryContext.Provider value={dataStore}>{children}</UnecesssaryContext.Provider>;
};

export default UnecesssaryContextProvider;
