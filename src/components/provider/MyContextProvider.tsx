"use client";
import { AppProps } from "next/app";
import React, { createContext, useContext, useState } from "react";

interface ContextData {
  menuOpen: boolean;
  setMenuClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<ContextData | undefined>(undefined);

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};

export const MyContextProvider: React.FC<AppProps> = ({ children }: any) => {
  const [menuOpen, setMenuClose] = useState<boolean>(false);

  const contextValue: ContextData = {
    menuOpen,
    setMenuClose,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
