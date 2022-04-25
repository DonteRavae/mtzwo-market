import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { LinksContainer, NavLinkContainer } from "./Links.styled";

type NavLinkProps = {
  destination: string;
  children: ReactNode;
};

type LinkProps = {
  children?: ReactNode;
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

export const MemberAccessLink = ({ children }: LinkProps) => {
  const navigate = useNavigate();
  return (
    <LinksContainer
      id="memberAccessLink"
      onClick={() => navigate("/members/signin")}
    >
      {children}
    </LinksContainer>
  );
};

export const CartLink = ({ children }: LinkProps) => {
  const navigate = useNavigate();
  return (
    <LinksContainer id="cartLink" onClick={() => navigate("/cart")}>
      {children}
    </LinksContainer>
  );
};

export const DepartmentNavLink = ({ destination, children }: NavLinkProps) => {
  return <NavLinkContainer to={destination}>{children}</NavLinkContainer>;
};
