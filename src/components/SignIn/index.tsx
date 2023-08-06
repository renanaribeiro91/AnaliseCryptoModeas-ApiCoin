// SignInButton.js

import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "../Modal";
import SignModal from "../Modal/SignModal";

interface SignInButtonProps {
  children: React.ReactNode;
  isModal?: boolean;
  onClick?: () => void; 
}

const StyledButton = styled.button<{ isModal?: boolean }>`
  margin-right: 2rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 16px;

  ${(props) =>
    props.isModal &&
    css`
      width: 384px;
      height: 48px;
      padding: 14px 24px;
      border-radius: 32px;
      gap: 10px;
      background-color: #fbab34;
      color: #fff;
    `}
`;

export default function SignInButton({ children, isModal, onClick }: SignInButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    if (onClick) {
      onClick();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <StyledButton isModal={isModal} onClick={openModal}>
        {children}
      </StyledButton>
      {isModalOpen && (
        <Modal>
          <SignModal closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}
