import { createContext, useMemo, useState } from 'react';

export const CurrentPageContext = createContext(null);

export const CurrentPageContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('start');

  const valueCurrentPageContext = useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage]
  );

  return (
    <CurrentPageContext.Provider value={valueCurrentPageContext}>
      {children}
    </CurrentPageContext.Provider>
  );
};
