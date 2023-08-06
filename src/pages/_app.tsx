import "@/styles/globals.css";
import type { AppProps } from "next/app";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { CryptoDataContextProvider } from "../contexts/crypto";

const StyledMain = styled.main`
  flex: 1;
`;

function MyAppCoin({ Component, pageProps }: AppProps) {
  return (
    <CryptoDataContextProvider>
      <Header />
      <StyledMain>
        <Component {...pageProps} />
      </StyledMain>
      <Footer />
    </CryptoDataContextProvider>
  );
}

export default MyAppCoin;
