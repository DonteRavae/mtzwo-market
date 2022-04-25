import { useNavigate } from "react-router-dom";
import { LogoContainer, LogoImageContainer } from "./Logo.styled";
import logoImg from "../../assets/mtzwo-logo.png";

const Logo = () => {
  const navigate = useNavigate();
  const handleClick = (): void => navigate("/");
  return (
    <LogoContainer className="logo" onClick={handleClick}>
      <LogoImageContainer src={logoImg} alt="Mt. Zion World Outreach Logo" />
    </LogoContainer>
  );
};

export default Logo;
