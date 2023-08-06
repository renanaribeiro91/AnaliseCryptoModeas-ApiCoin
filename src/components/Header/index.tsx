import React, { useState } from "react";
import LogoCoinSynch from "../logo";
import styled, { css } from "styled-components";
import Image from "next/image";
import ButtonSignUp from "../SignUp";
import SignInButton from "../SignIn";
import { useCryptoData } from "../../contexts/crypto";
import CoinSynchLoading from '../loading';

const StyledHeader = styled.header`
  box-shadow: 0 2px 4px rgba(77, 77, 77, 0.1);
  padding: 18px;
  position: relative;
`;

const HeaderContainer = styled.div`
  max-width: 1226px;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const MenuIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div<{ isMobileMenuOpen: any }>`
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #f9f9f9;
  padding: 1rem;
  display: ${(props) => (props.isMobileMenuOpen ? "flex" : "none")};
`;

const MenuItem = styled.p<{ hidden?: any }>`
  margin: 0;
  display: flex;

  @media (max-width: 768px) {
    ${(props) =>
      props.hidden &&
      css`
        display: none;
      `}
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: relative;
    display: none;
  }
`;

const CarouselLink = styled.p`
  margin-right: 2rem;
`;

const SignInLink = styled.p`
  margin-right: 2rem;
`;

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cryptoData } = useCryptoData();

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {cryptoData.length === 0 ? (
        <CoinSynchLoading />
      ) : (
        <>
          <StyledHeader>
            <HeaderContainer>
              <LeftContent>
                <LogoCoinSynch hasIcon width={95} />
                <MenuItem hidden>about us</MenuItem>
                <MenuItem hidden>Top Cryptos</MenuItem>
              </LeftContent>
              <RightContent>
                <CarouselLink>carousel</CarouselLink>
                <SignInButton data-qa-id="ButtonSignUp">Sign In</SignInButton>
                <ButtonSignUp data-qa-id="ButtonSignIn">Sign Up</ButtonSignUp>
              </RightContent>

              <MenuIcon onClick={handleMobileMenuToggle}>
                <Image
                  alt=""
                  src="svgs/menu.svg"
                  width={30}
                  height={0}
                  style={{
                    height: "auto",
                  }}
                />
              </MenuIcon>
            </HeaderContainer>
            {isMobileMenuOpen && (
              <MobileMenu isMobileMenuOpen={isMobileMenuOpen}>
                <MenuItem>about us</MenuItem>
                <MenuItem>Top Cryptos</MenuItem>
                <SignInLink>sign In</SignInLink>
                <ButtonSignUp>Sign Up</ButtonSignUp>
              </MobileMenu>
            )}
          </StyledHeader>
        </>
      )}
    </>
  );
}
