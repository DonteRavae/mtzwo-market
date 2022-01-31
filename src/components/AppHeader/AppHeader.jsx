import React from "react";
import {
  faBars,
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  StyledHeader,
  StyledNavigationAndSearchWrapper,
} from "./AppHeader.styled";
import StyledLogo from "../Logo/Logo.styled";
import {
  StyledCategoryNavigationLink,
  StyledCategoryNavigationBar,
} from "../CategoryNavigation/CategoryNavigation.styled";
import StyledDealsPageLink from "../DealsPageLink/DealsPageLink.styled";
import StyledMarketSearchbar from "../MarketSearchbar/MarketSearchbar.styled";
import StyledMemberServicesLink, {
  StyledMemberServicesWrapper,
} from "../MemberServicesLink/MemberServicesLink.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AppHeader = ({ toggleMobileMenu }) => {
  return (
    <StyledHeader>
      <FontAwesomeIcon
        className="menu-icon"
        icon={faBars}
        size="lg"
        onClick={toggleMobileMenu}
      />
      <StyledLogo />
      <StyledNavigationAndSearchWrapper>
        <StyledDealsPageLink title="Weekly Deals" />
        <StyledMarketSearchbar placeholder="Search Marketplace" iconSize="lg" />
        <StyledDealsPageLink title="Best Sellers" />
        <StyledCategoryNavigationBar>
          <StyledCategoryNavigationLink title="Audio" destination="audio" />
          <StyledCategoryNavigationLink title="Video" destination="video" />
          <StyledCategoryNavigationLink title="Books" destination="books" />
          <StyledCategoryNavigationLink
            title="Clothing"
            destination="clothing"
          />
        </StyledCategoryNavigationBar>
      </StyledNavigationAndSearchWrapper>
      <StyledMemberServicesWrapper>
        <StyledMemberServicesLink
          title="Sign In"
          icon={faUserCircle}
          iconSize="lg"
          destination="signin"
          id="account-nav"
        />
        <StyledMemberServicesLink
          title="Cart"
          icon={faShoppingCart}
          iconSize="lg"
          destination="cart"
        />
      </StyledMemberServicesWrapper>
    </StyledHeader>
  );
};

export default AppHeader;
