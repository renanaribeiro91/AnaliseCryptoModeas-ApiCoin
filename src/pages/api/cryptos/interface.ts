export type CryptoData = {
  number: string;
  name: string;
  price: string;
  change: string;
};

export interface CryptoDataProps {
  cryptoData: CryptoData[] | [];
}
