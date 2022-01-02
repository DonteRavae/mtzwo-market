import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "./assets/mtzwo-logo.png";

const StyledHeader = styled.header`
  height: 87px;
  width: 100%;
  display: flex;
  background-color: rgb(51, 51, 51);
  box-shadow: 0 2px 3px #888;
`;
const StyledBrandingSection = styled.section`
  padding: 0.5em 0.25em 0.5em 2em;
  cursor: pointer;
  & img {
    height: 185%;
  }
`;
const StyledNavigationAndSearchSection = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;
const StyledDealsNav = styled.div`
  width: 5%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  padding: 0 1.5rem;
  color: white;
  text-align: center;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
  }
`;
const StyledCategoryNavLinkSection = styled.section`
  width: 100%;
  display: flex;
  color: #333;
  background-color: white;
  border: 1px solid #333;
  font-weight: 600;
  border-radius: 3px;
  box-shadow: 0 2px 4px #888;
`;
const StyledNavLink = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 21px;
  cursor: pointer;
  & span {
    text-transform: uppercase;
    font-size: 0.8em;
  }
  &:hover {
    text-decoration: underline;
    background-color: #612376;
    color: white;
  }
`;
const StyledSearchSection = styled.section`
  height: 74px;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    color: white;
  }
`;
const StyledMarketplaceSearchbar = styled.input.attrs({ type: "search" })`
  width: 80%;
  padding: 0.5em;
  font-size: 1.05em;
  outline: none;
`;
const StyledSearchIconWrapper = styled.div`
  background-color: #612376;
  padding: 0.5em;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;
const StyledSearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
`;
const StyledMemberServicesSection = styled.section`
  width: 7%;
  `;
  const StyledMemberService = styled.div`
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.85em;
  color: white;
  padding: 0 2em;
  cursor: pointer;
  &:hover {
    background-color: #612376;
  }
  & span {
    margin-left: 0.5em;
    cursor: pointer;
  }
`;
const StyledMemberServiceIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
`;

const AppHeader = () => {
  return (
    <StyledHeader>
      <StyledBrandingSection>
        <img src={logo} alt="" className="logo" />
      </StyledBrandingSection>
      <StyledNavigationAndSearchSection>
        <StyledDealsNav>
          <span>Weekly Deals</span>
        </StyledDealsNav>
        <StyledSearchSection>
          <StyledMarketplaceSearchbar placeholder="Search Marketplace" />
          <StyledSearchIconWrapper>
            <StyledSearchIcon icon={faSearch} size="lg" />
          </StyledSearchIconWrapper>
        </StyledSearchSection>
        <StyledDealsNav>
          <span>Best Sellers</span>
        </StyledDealsNav>
        <StyledCategoryNavLinkSection>
          <StyledNavLink>
            <span>Audio</span>
          </StyledNavLink>{" "}
          <StyledNavLink>
            <span>Video</span>
          </StyledNavLink>{" "}
          <StyledNavLink>
            <span>Books</span>
          </StyledNavLink>{" "}
          <StyledNavLink>
            <span>Clothing</span>
          </StyledNavLink>
        </StyledCategoryNavLinkSection>
      </StyledNavigationAndSearchSection>
      <StyledMemberServicesSection>
        <StyledMemberService>
          <StyledMemberServiceIcon size="lg" icon={faUserCircle} />
          <span>Account</span>{" "}
        </StyledMemberService>
        <StyledMemberService>
          <StyledMemberServiceIcon size="lg" icon={faShoppingCart} />
          <span>Cart</span>{" "}
        </StyledMemberService>
      </StyledMemberServicesSection>
    </StyledHeader>
  );
};

export default AppHeader;
