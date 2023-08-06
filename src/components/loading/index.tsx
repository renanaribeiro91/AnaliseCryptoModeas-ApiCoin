import React from "react";
import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 4px solid #fbab34;
  border-radius: 50%;
  border-top: 4px solid transparent;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const CoinSynchText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`;

const CoinSynchLoading = () => {
  return (
    <LoadingContainer>
      <Loader />
      <CoinSynchText>coinSynch</CoinSynchText>
    </LoadingContainer>
  );
};

export default CoinSynchLoading;
