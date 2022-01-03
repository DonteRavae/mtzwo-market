import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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

const AppHeader = () => {
  return (
    <StyledHeader>
      <StyledLogo size="145px" />
      <StyledNavigationAndSearchWrapper>
        <StyledDealsPageLink title="Weekly Deals" />
        <StyledMarketSearchbar placeholder="Search Marketplace" iconSize="lg" />
        <StyledDealsPageLink title="Best Sellers" />
        <StyledCategoryNavigationBar>
          <StyledCategoryNavigationLink title="Audio" />
          <StyledCategoryNavigationLink title="Video" />
          <StyledCategoryNavigationLink title="Books" />
          <StyledCategoryNavigationLink title="Clothing" />
        </StyledCategoryNavigationBar>
      </StyledNavigationAndSearchWrapper>
      <StyledMemberServicesWrapper>
        <StyledMemberServicesLink
          title="Account"
          icon={faUserCircle}
          iconSize="lg"
        />
        <StyledMemberServicesLink
          title="Cart"
          icon={faShoppingCart}
          iconSize="lg"
        />
      </StyledMemberServicesWrapper>
    </StyledHeader>
  );
};

export default AppHeader;
