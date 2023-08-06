

import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  type?: string;
}

const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 32px;
  left: 10px;
`;

const StyledInput = styled.input<{ hasIcon?: boolean }>`
  width: 100%;
  padding: 15px;
  margin-top: 16px;
  padding-left: ${(props) => (props.hasIcon ? "34px" : "8px")};
  border-radius: 4px;
  border: 1px solid #e0deea;
  font-weight: 400;

  &::placeholder {
    color: #5d6670;
  }
`;

const TogglePasswordButton = styled.button`
  position: absolute;
  top: 32px;
  right: 10px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 14px;
  color: #5d6670;
`;

export default function Input({
  placeholder,
  value,
  onChange,
  icon,
  type,
}: InputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <InputContainer>
      {icon && (
        <IconContainer>
          <Image alt="" src={icon} width={16} height={16} />
        </IconContainer>
      )}

      <StyledInput
        type={type === "password" && isPasswordVisible ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        hasIcon={!!icon}
      />
      {type === "password" && (
        <TogglePasswordButton onClick={handleTogglePassword}>
          <Image alt="" src="svgs/olhoPass.svg" width={16} height={16} />
        </TogglePasswordButton>
      )}
    </InputContainer>
  );
}
