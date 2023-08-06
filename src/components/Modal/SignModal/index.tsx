import React, { useState } from "react";
import Image from "next/image";
import Input from "../../Input";
import SignInButton from "../../SignIn";
import Link from "next/link";
import LogoCoinSynch from "../../logo";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const ModalContainer = styled.div`
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseImage = styled(Image)`
  background-color: transparent;
  height: auto;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #5d6670;
`;

const LogoWrapper = styled.span`
  margin: 6px 0 0 5px;
`;

const ForgotPasswordLink = styled.div`
  text-align: end;
  margin-top: 8px;
  font-size: 12px;
`;

const StyledLink = styled(Link)`
  color: #8c8a97;
  font-size: 12px;
  text-decoration: none;
`;

const SignUpLinkWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
`;

const SignUpLink = styled(Link)`
  font-weight: 700;
  color: #5d6670;
  font-size: 15px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`;

const LogoWrapperSignUp = styled.span`
  margin: 3px 0 0 5px;
`;

interface LoginModalProps {
  closeModal: () => void;
  hasCLickedSignUp?: boolean;
}

export default function SignModal({
  closeModal,
  hasCLickedSignUp,
}: LoginModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const router = useRouter();

  const handleSignIn = () => {
    closeModal();
    router.push("/dashboard");
  };

  return (
    <ModalContainer>
      <CloseButton>
        <CloseImage
          onClick={closeModal}
          alt=""
          src="svgs/close.svg"
          width={19}
          height={0}
        />
      </CloseButton>

      <Title>
        Sign in to
        <LogoWrapper>
          <LogoCoinSynch width={110} />
        </LogoWrapper>
      </Title>

      {hasCLickedSignUp && (
        <Input
          icon="svgs/outline.svg"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      )}

      <Input
        icon="svgs/outline.svg"
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        icon="svgs/lock.svg"
        type={"password"}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {hasCLickedSignUp && (
        <Input
          icon="svgs/lock.svg"
          type={"password"}
          placeholder="Confirm password"
          value={confirmPass}
          onChange={(e) => setconfirmPass(e.target.value)}
        />
      )}

      <ForgotPasswordLink>
        <StyledLink href="">Forgot password?</StyledLink>
      </ForgotPasswordLink>

      <div style={{ textAlign: "center", marginTop: "16px" }}>
        <SignInButton isModal onClick={handleSignIn}>
          Sign In
        </SignInButton>
      </div>

      <SignUpLinkWrapper>
        Don’t have an account?{" "}
        <SignUpLink href="/signup">
          Sign up to
          <LogoWrapperSignUp>
            <LogoCoinSynch width={70} />
          </LogoWrapperSignUp>
        </SignUpLink>
      </SignUpLinkWrapper>
    </ModalContainer>
  );
}
