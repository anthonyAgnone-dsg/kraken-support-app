/* eslint-disable react/prop-types */
import { createContext, useState, useMemo } from 'react';

export const ModalContext = createContext(null);

const ModalContextProvider = ({ children }) => {
  const [viewModal, setViewModal] = useState(false);
  const modal = useMemo(() => ({ viewModal, setViewModal }), [viewModal, setViewModal]);
  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>;
};

export default ModalContextProvider;
