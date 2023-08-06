import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";

const backgroundImage = "/svgs/Wave3.svg";
const Container = styled.div`
  position: relative;
  height: 412px;
  overflow: hidden;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  background: linear-gradient(rgba(255, 165, 0, 0.8), rgba(189, 117, 24, 0.95));
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  color: red;
  box-sizing: border-box;
  padding: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  gap: 20px;

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 4px;
  }
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #ffe1b5;

  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`;

const SubTitle = styled.h2`
  font-size: 40px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;

const Input = styled.input`
  border: none;
  margin-bottom: 10px;
  width: 384px;
  padding: 14px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SubscribeButton = styled.button`
  font-size: 16px;
  color: #ffffff;
  border: #fbab34;
  background-color: #fbab34;
  width: 384px;
  padding: 14px 24px;
  border-radius: 32px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setErrorMessage("Please enter your email.");
      return;
    }

    setLoading(true);
    setErrorMessage("");

    const data = {
      email: email,
    };

    const apiKey = "B9E3F3A0-6D71-4925-B2FD-237D2804BF3F";
    const apiUrl = "https://api.coingecko.com/api/v1/newsletters/subscribe";

    const config = {
      headers: {
        "Content-Type": "application/json",
        "X-CoinAPI-Key": apiKey,
      },
    };

    try {
      const response = await axios.post(apiUrl, data, config);
      console.log("Inscrição realizada com sucesso!", response);
      setEmail(""); 
    } catch (error: any) {
      console.error("Falha ao se inscrever na newsletter:", error.message);
      setErrorMessage("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <BackgroundOverlay>
        <Image
          alt=""
          src={backgroundImage}
          width={1440}
          height={412}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </BackgroundOverlay>
      <ContentContainer>
        <TextContainer>
          <Title>Lorem ipsum</Title>
          <SubTitle>Lorem ipsum</SubTitle>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
          </Description>
        </TextContainer>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <p style={{ color: "white", fontSize: "14px" }}>Email</p>
          <Input placeholder="Email" onChange={handleEmailChange} />
          <SubscribeButton type="button" onClick={handleSubscribe}>
            Subscribe
          </SubscribeButton>
        </div>
      </ContentContainer>
    </Container>
  );
}
