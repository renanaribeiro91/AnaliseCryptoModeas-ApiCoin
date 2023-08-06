import React from "react";
import LogoCoinSynch from "../logo";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  bottom: 0;
  box-shadow: 0 2px 4px rgba(77, 77, 77, 0.1);
  padding: 18px;
`;

const FooterContent = styled.div`
  max-width: 1226px;
  display: flex;
  align-items: center;
  margin: auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

const CopyrightText = styled.p`
  color: #5d6670;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FooterContent>
        <CopyrightText>Copyright © 2022 - All rights reserved</CopyrightText>
        <LogoCoinSynch hasIcon width={95}/>
      </FooterContent>
    </StyledFooter>
  );
}
