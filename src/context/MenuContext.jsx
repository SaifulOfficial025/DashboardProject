import React, { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  return (
    <MenuContext.Provider value={{ activeComponent, setActiveComponent }}>
      {children}
    </MenuContext.Provider>
  );
};
