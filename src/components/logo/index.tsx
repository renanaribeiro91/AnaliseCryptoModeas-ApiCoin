import React from "react";
import Image from "next/image";

const coinsSynchLogo = "svgs/coinSynch.svg";
const parentCoinsSynchLogo = "svgs/parentCoinSynch.svg";

interface LogoProps {
  width: number;
  hasIcon?: boolean;
}

export default function LogoCoinSynch({ width, hasIcon }: LogoProps) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Image
        alt="NameLogo"
        src={coinsSynchLogo}
        width={width}
        height={19}
        style={{
          height: "auto",
        }}
      />
      {hasIcon && (
        <Image
          alt="Logo"
          src={parentCoinsSynchLogo}
          width={21}
          height={21}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      )}
    </div>
  );
}
