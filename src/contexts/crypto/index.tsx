import React, { ReactNode, createContext, useContext, useState } from "react";
import { CryptoData } from "../../pages/api/cryptos/interface";

interface CryptoDataContextProps {
  cryptoData: CryptoData[];
  setCryptoData: React.Dispatch<React.SetStateAction<CryptoData[]>>;
}

export const CryptoDataContext = createContext<CryptoDataContextProps | null>(
  null
);

export const useCryptoData = () => {
  const context = useContext(CryptoDataContext);
  if (!context) {
    throw new Error("useCryptoData must be used within a CryptoDataProvider");
  }
  return context;
};

export const CryptoDataContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);

  return (
    <CryptoDataContext.Provider value={{ cryptoData, setCryptoData }}>
      {children}
    </CryptoDataContext.Provider>
  );
};
