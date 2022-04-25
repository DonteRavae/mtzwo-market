import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LinksContainer, NavLinkContainer } from "./Links.styled";
import {
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type NavLinkProps = {
  destination: string;
  children: ReactNode;
};

export const WeeklyDealsLink = () => {
  const navigate = useNavigate();
  return (
    <LinksContainer
      id="weeklyDealsLink"
      onClick={() => navigate("/deals/weekly")}
    >
      Weekly Deals
    </LinksContainer>
  );
};

export const BestSellersLink = () => {
  const navigate = useNavigate();
  return (
    <LinksContainer
      id="bestSellersLink"
      onClick={() => navigate("/catalog/bestsellers")}
    >
      Best Sellers
    </LinksContainer>
  );
};

export const MemberAccessLink = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/members/signin");
  return (
    <LinksContainer id="memberAccessLink" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faUserCircle}
        size="lg"
        onClick={handleClick}
        className="link-icon"
      />
      <span onClick={handleClick}>Sign In</span>
    </LinksContainer>
  );
};

export const CartLink = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/cart");
  return (
    <LinksContainer id="cartLink" onClick={handleClick}>
      <FontAwesomeIcon
        icon={faShoppingCart}
        size="lg"
        onClick={handleClick}
        className="link-icon"
      />
      <span onClick={handleClick}>Cart</span>
    </LinksContainer>
  );
};

export const DepartmentNavLink = ({ destination, children }: NavLinkProps) => {
  return <NavLinkContainer to={destination}>{children}</NavLinkContainer>;
};
