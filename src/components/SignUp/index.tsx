import React, { useState } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";
import Modal from "../Modal";
import SignModal from "../Modal/SignModal";

const baseButtonStyles = (hidden: any) => css`
  height: 48px;
  padding: 14px 24px;
  border-radius: 32px;
  gap: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fbab34;
  color: #ffffff;
  border: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: ${hidden ? "none" : "inline-flex"};
  }
`;

const Button = styled.button<{ fontSize?: string; width?: string }>`
  ${baseButtonStyles}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}
`;

interface ButtonSignUpProps {
  icon?: boolean;
  customStyles?: React.CSSProperties;
  children: React.ReactNode;
  width?: string;
  fontSize?: string;
  iconWidth?: number;
  ref?: any;
}

export default function ButtonSignUp({
  icon,
  width,
  fontSize,
  children,
  customStyles,
  iconWidth,
  ref,
}: ButtonSignUpProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        ref={ref}
        width={width}
        fontSize={fontSize}
        style={customStyles}
        onClick={openModal}
      >
        {children}
        {icon && (
          <Image
            alt=""
            src="svgs/setaButton.svg"
            color="white"
            width={iconWidth}
            height={1}
            style={{
              height: "auto",
            }}
          />
        )}
      </Button>
      {isModalOpen && (
        <Modal>
          <SignModal hasCLickedSignUp closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
