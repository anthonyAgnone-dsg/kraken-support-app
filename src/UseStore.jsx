/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react';

import { UnecesssaryContext } from './UnecessaryContext';

function useStore() {
  const store = useContext(UnecesssaryContext);
  if (!store) {
    throw new Error('store not found');
  }
  const [state, setState] = useState(store.get());

  useEffect(() => {
    return store.subscribe(() => setState(store.get()));
  }, []);

  return [state, store.set];
}

export default useStore;
