import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ReactNode } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

const CardSolutionsContainer = styled.div`
  width: 280px;
  height: 268px;
  padding: 24px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    cursor: grab;
  }
`;

const CompanyName = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const Slogan = styled.h3`
  font-size: 1rem;
  color: #666666;
`;

const Description = styled.p`
  font-size: 1.1rem;
`;

interface CardSolutionsProps {
  logo: string;
  slogan: string;
  companyName: string;
  children: ReactNode;
}

export const CardSolutions = ({
  logo,
  slogan,
  companyName,
  children,
}: CardSolutionsProps) => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <Draggable disabled={!isMobile}>
      <CardSolutionsContainer>
        <Image
          src={logo}
          alt="logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "51px",
            height: "auto",
          }}
        />
        <CompanyName>{companyName}</CompanyName>
        <Slogan>{slogan}</Slogan>
        <Description>{children}</Description>
      </CardSolutionsContainer>
    </Draggable>
  );
};
