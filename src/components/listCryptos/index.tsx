import React, { useState } from "react";
import styled from "styled-components";
import { CryptoDataProps } from "../../pages/api/cryptos/interface";

const CryptoListContainer = styled.div<{ $expand?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: ${({ $expand }) => ($expand ? "auto" : "hidden")};
  height: ${({ $expand }) => ($expand ? "694px" : "370px")};
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    height: ${({ $expand }) => ($expand ? "650px" : "318px")};
  }
`;

const ListTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 28px;
`;

const CryptoItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  padding: 18px;
`;

const ItemNumber = styled.div`
  width: 10px;
  font-size: 14px;
  color: #666666;
  font-weight: bold;
`;

const ItemName = styled.div`
  font-size: 16px;
  width: 120px;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const ItemPrice = styled.div`
  width: 120px;
  font-size: 14px;
  color: #666666;
`;

const ItemChange = styled.div`
  width: 80px;
  font-size: 14px;
  color: #666666;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;

const ItemBuyButton = styled.button`
  width: 80px;
  height: 32px;
  padding: 8px 16px;
  border: none;
  border-radius: 32px;
  background-color: #149e55;
  color: #ffffff;
  font-size: 14px;
  cursor: pointer;
`;

const ListTitleMobile = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CryptoItemContainerMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 18px;
`;

const ItemNameMobile = styled.div`
  font-size: 16px;
  flex: 1;
`;

const ItemTradeMobile = styled.div`
  font-size: 14px;
  color: #666666;
  cursor: pointer;
`;

const PriceChangeContainerMobile = styled.div<{ expand: any }>`
  display: ${({ expand }) => (expand ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px 0;
`;

const PriceChangeLabel = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 9px;
`;

const MobileListCryptos: React.FC<CryptoDataProps> = ({ cryptoData }) => {
  const [expandedCrypto, setExpandedCrypto] = useState<number | null>(null);
  const [expandList, setExpandList] = useState(false);

  const showItems = () => {
    setExpandList(!expandList);
  };

  const toggleExpand = (index: number) => {
    setExpandedCrypto((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "18rem auto",
      }}
    >
      <ListTitleMobile>Top Cryptos</ListTitleMobile>
      <CryptoListContainer $expand={expandList}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <ItemName>Crypto</ItemName>
          <ItemChange>Change</ItemChange>
        </div>
        {cryptoData.map((crypto: any, index: any) => (
          <React.Fragment key={crypto.number}>
            <CryptoItemContainerMobile
              style={{ background: index % 2 === 1 ? "#F6F6F6" : "none" }}
            >
              <ItemNameMobile>{crypto.name}</ItemNameMobile>
              <ItemTradeMobile onClick={() => toggleExpand(index)}>
                {expandedCrypto === index ? "▲" : "▼"}
              </ItemTradeMobile>
            </CryptoItemContainerMobile>
            {expandedCrypto === index && (
              <PriceChangeContainerMobile expand={expandedCrypto === index}>
                <PriceChangeLabel>Price: {crypto.price}</PriceChangeLabel>
                <PriceChangeLabel>Change: {crypto.change}</PriceChangeLabel>
              </PriceChangeContainerMobile>
            )}
          </React.Fragment>
        ))}
      </CryptoListContainer>
      <button
        style={{
          color: "#FBAB34",
          fontSize: "16px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={showItems}
      >
        {expandList ? "View Less -" : "View More +"}
      </button>
    </div>
  );
};

const ListCryptos = ({ mobileView, cryptoData }: any) => {
  const [expand, setExpand] = useState(false);

  const showItems = () => {
    setExpand(!expand);
  };

  if (mobileView) {
    return <MobileListCryptos cryptoData={cryptoData} />;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "18rem auto",
      }}
    >
      <ListTitle>Top Cryptos</ListTitle>
      <CryptoListContainer $expand={expand}>
        <CryptoItemContainer>
          <ItemNumber>#</ItemNumber>
          <ItemName>Crypto</ItemName>
          <ItemPrice>Price</ItemPrice>
          <ItemChange>Change</ItemChange>
          <ItemChange>Trade</ItemChange>
        </CryptoItemContainer>

        {cryptoData.map((crypto: any, index: any) => (
          <CryptoItemContainer
            key={crypto.number}
            style={{ background: index % 2 === 1 ? "#F6F6F6" : "none" }}
          >
            <ItemNumber>{crypto.number}</ItemNumber>
            <ItemName>{crypto.name}</ItemName>
            <ItemPrice>{crypto.price}</ItemPrice>
            <ItemChange>{crypto.change}</ItemChange>
            <ItemBuyButton>Buy</ItemBuyButton>
          </CryptoItemContainer>
        ))}
      </CryptoListContainer>
      <button
        style={{
          color: "#FBAB34",
          fontSize: "16px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
        onClick={showItems}
      >
        {expand ? "View Less -" : "View More +"}
      </button>
    </div>
  );
};

export default ListCryptos;
