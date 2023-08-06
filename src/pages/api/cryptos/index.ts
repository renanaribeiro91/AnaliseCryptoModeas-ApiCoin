import axios from "axios";
import { NextApiResponse } from "next";

type CryptoData = {
  number: string;
  name: string;
  price: string;
  change: string;
};

export default async function handler(
  _: any,
  res: NextApiResponse<CryptoData[]>
) {
  const response = await axios.get(
    "https://api.coingecko.com/api/v3/coins/markets",
    {
      params: {
        vs_currency: "usd",
        ids: "",
      },
    }
  );

  const formattedData: CryptoData[] = response.data.map(
    (crypto: any, index: number) => ({
      number: `0${index + 1}`.slice(-2),
      name: crypto.name,
      price: `US$ ${crypto.current_price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      change: `${crypto.price_change_24h.toFixed(2)}%`,
    })
  );

  res.status(200).json(formattedData);
}
