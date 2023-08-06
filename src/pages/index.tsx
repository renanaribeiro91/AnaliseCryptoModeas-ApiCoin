"use client";
// @refresh disable

import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import Link from "next/link";

import { CardSolutions } from "../components/CardSolutions";
import NewsletterForm from "../components/NewsletterForm";
import ButtonSignUp from "../components/SignUp";
import ListCryptos from "../components/listCryptos";
import { GetServerSideProps, GetStaticProps } from "next";
import { CryptoData, CryptoDataProps } from "./api/cryptos/interface";
import axios, { AxiosResponse } from "axios";
import { useCryptoData } from "../contexts/crypto";
import CoinSynchLoading from '../components/loading';

const Main = styled.main`
  margin-top: 164px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    margin-top: 70px;
  }
`;

const Section = styled.section`
  max-width: 1216px;
  margin: auto;

  @media (max-width: 768px) {
    max-width: 320px;
    width: 100%;
  }
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 2rem;

  @media screen and (max-width: 1024px) {
    width: 100%;
    /* margin: 64px 0; */
    align-items: center;
    text-align: center;
  }
`;

const Title = styled.h1`
  color: #fbab34;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    line-height: 42px;
  }
`;

const Paragraph = styled.p`
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: #5d6670;
`;

const LinkContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 26px;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const CarouselContainer = styled.div`
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundImageContainer = styled.div`
  /* margin-top: 20px; */
`;

const CardConteiner = styled.div`
  flex-direction: column;
  display: flex;
  gap: 2rem;
  margin: 12rem 0 12rem 0;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    order: 2;
    margin: 2rem 0 3rem 0;
  }
`;

const SolutionsDescriptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 35%;

  @media (max-width: 768px) {
    width: 100%;
    order: 1;
  }

  @media (max-width: 1024px) {
    width: 100%;
    order: 1;
  }
`;

const StyledLinkContainer = styled.div`
  background-color: #fff6e8;
  padding: 8px 16px 8px 16px;
  align-items: center;
  border-radius: 4px;
`;

const Home: React.FC<CryptoDataProps> = ({ cryptoData }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { setCryptoData } = useCryptoData();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    if (cryptoData.length > 0) {
      setDataLoaded(true);
      setCryptoData(cryptoData);
    }
  }, [cryptoData, setCryptoData]);

  return (
    <>
      {!dataLoaded ? (
        <CoinSynchLoading />
      ) : (
        <Main>
          <Section>
            <SectionWrapper>
              <LeftContainer>
                <Title>Lorem ipsum dolor sit amet, consectetur</Title>
                <Paragraph>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna, porttitor
                </Paragraph>
                <ButtonSignUp
                  icon
                  width="278px"
                  fontSize="1.2rem"
                  iconWidth={14}
                >
                  SIGN UP NOW
                </ButtonSignUp>
                <LinkContainer>
                  <StyledLinkContainer>
                    <Link
                      href=""
                      style={{
                        color: "#fbab34",
                        fontSize: "20px",
                        textDecoration: "none",
                      }}
                    >
                      Cryptos
                    </Link>
                  </StyledLinkContainer>
                  <StyledLinkContainer>
                    <Link
                      href=""
                      style={{
                        color: "#fbab34",
                        fontSize: "20px",
                        textDecoration: "none",
                      }}
                    >
                      NFTs
                    </Link>
                  </StyledLinkContainer>
                  <StyledLinkContainer>
                    <Link
                      href=""
                      style={{
                        color: "#fbab34",
                        fontSize: "20px",
                        textDecoration: "none",
                      }}
                    >
                      Games
                    </Link>
                  </StyledLinkContainer>
                </LinkContainer>
              </LeftContainer>
              <CarouselContainer>
                <Image
                  alt=""
                  src="svgs/carousel.svg"
                  width={0}
                  height={0}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </CarouselContainer>
            </SectionWrapper>
          </Section>

          <BackgroundImageContainer>
            <Image
              alt=""
              src={
                isMobile
                  ? "svgs/backGroundImg.svg"
                  : "svgs/isDeskBackGround.svg"
              }
              width={0}
              height={1}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </BackgroundImageContainer>
          <div
            style={{
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #F7F7F7 100%)",
              width: "100%",
              height: "100%",
            }}
          >
            <Section>
              <SectionWrapper>
                <CardConteiner>
                  <div style={{ display: "flex", gap: "2rem" }}>
                    <CardSolutions
                      logo="svgs/B.svg"
                      companyName="For your company"
                      slogan="Crypto Solutions"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam,
                    </CardSolutions>
                    <CardSolutions
                      logo="svgs/circle.svg"
                      companyName="For your company"
                      slogan="Crypto Solutions"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam,
                    </CardSolutions>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "0 0 0 7rem",
                      gap: "2rem",
                    }}
                  >
                    <CardSolutions
                      logo="svgs/grafic.svg"
                      companyName="For your company"
                      slogan="Crypto Solutions"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam,
                    </CardSolutions>
                    <CardSolutions
                      logo="svgs/deskMob.svg"
                      companyName="For your company"
                      slogan="Crypto Solutions"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                      aliquam,
                    </CardSolutions>
                  </div>
                </CardConteiner>
                <SolutionsDescriptionsContainer>
                  <span style={{ color: "#FBAB34" }}>Lorem ipsum </span>
                  <h2 style={{ color: "#5D6670" }}>Lorem ipsum</h2>
                  <text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                    aliquam, purus sit amet luctus venenatis, lectus magna
                    fringilla urna, porttitor
                  </text>
                  <ButtonSignUp width="176px" fontSize="16px">
                    SIGN UP NOW
                  </ButtonSignUp>
                </SolutionsDescriptionsContainer>
              </SectionWrapper>
            </Section>
          </div>
          <Section>
            <ListCryptos mobileView={isMobile} cryptoData={cryptoData} />
          </Section>
          <NewsletterForm />
        </Main>
      )}
    </>
  );
};

export const getStaticProps: GetStaticProps<CryptoDataProps> = async () => {
  try {
    const response: AxiosResponse<CryptoData[]> = await axios.get(
      "http://localhost:3000/api/cryptos"
    );

    return {
      props: {
        cryptoData: response.data,
      },
      revalidate: 3,
    };
  } catch (error) {
    return {
      props: {
        cryptoData: [],
      },
    };
  }
};

export default Home;
