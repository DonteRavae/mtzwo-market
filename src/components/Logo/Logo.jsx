import React from "react";
import logoImg from "../../assets/mtzwo-logo.png";

const Logo = ({ className }) => {
  return (
    <div className={className}>
      <img src={logoImg} alt="Mt. Zion Shield Logo" />
    </div>
  );
};

export default Logo;
