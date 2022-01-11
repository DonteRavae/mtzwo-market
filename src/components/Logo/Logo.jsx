import React from "react";
import { useNavigate } from "react-router-dom";
import logoImg from "../../assets/mtzwo-logo.png";

const Logo = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  return (
    <div className={className} onClick={handleClick}>
      <img src={logoImg} alt="Mt. Zion Shield Logo" />
    </div>
  );
};

export default Logo;
