import React from "react";
import logoImg from "@/images/logo.png";
import logoLightImg from "@/images/logo.png";
import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  img?: string;
  imgLight?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  img = logoImg,
  imgLight = logoLightImg,
  className = "flex-shrink-0",
}) => {
  return (
    <Link
      href="/"
      className={`ttnc-logo inline-block text-slate-600 ${className}`}
    >
      {/* THIS USE FOR MY CLIENT */}
      {/* PLEASE UN COMMENT BELLOW CODE AND USE IT */}
      {img ? (
        <Image
          className={`block w-auto ${
            imgLight ? "dark:hidden" : ""
          } `}
        style={{height:'100px'}}
        src={img}
        alt="Logo"
        sizes="600px"
        priority
        />
        ) : (
          "Logo Here"
          )}
      {imgLight && (
        <Image
        className="hidden w-auto dark:block"
          style={{height:'100px'}}
          src={imgLight}
          alt="Logo-Light"
          sizes="600px"
          priority
        />
      )}
    </Link>
  );
};

export default Logo;
