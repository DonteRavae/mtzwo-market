import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/mtzwo-logo.png";
import "./AppHeader.css";

const StyledHeader = styled.header`
  height: 88px;
  width: 100%;
  display: flex;
  //   padding: 0 2em;
  // border-bottom: 2px solid #333;
  background-color: rgb(51, 51, 51);
`;
const StyledBrandingSection = styled.section`
  padding: 0.5em 2em 0.5em 2em;
  cursor: pointer;
//   padding-left: 2em;
  //   background-color: white;
  //   border: 3px solid #333;
  //   border-right: 1px solid white;
`;
const StyledNavigationAndSearchSection = styled.div`
  width: 100%;
`;
const StyledCategoryNavLinkSection = styled.section`
  width: 100%;
  //   padding: 0 0.5em;
  display: flex;
  justify-content: space-evenly;
  color: #333;
  background-color: white;
  border: 1px solid #333;
  font-weight: 600;
`;
const StyledNavLink = styled.div`
  flex: 1;
  text-align: center;
  height: 25px;
  //   margin: 0 0.5em;
  & span {
    cursor: pointer;
    text-transform: uppercase;
    font-size: 0.9em;
  }
  &:hover {
    text-decoration: underline;
    background-color: #888;
    color: white;
  }
`;
const StyledSearchSection = styled.section`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: #444;
  span {
    color: white;
  }
`;
const StyledMarketplaceSearchbar = styled.input.attrs({ type: "search" })`
  width: 50%;
  height: 50%;
  padding: 0.5em;
  font-size: 1.05em;
  outline: none;
  //   margin-right: 0.4em;
`;
const StyledSearchIconWrapper = styled.div`
  background-color: purple;
  height: 50%;
  width: 3%;
  padding: 0.5em;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
const StyledSearchIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  color: white;
`;
const StyledMemberServicesSection = styled.section`
  width: 7%;
  //   border-left: 1px solid white;
`;
const StyledMemberService = styled.div`
  height: 50%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.85em;
  color: white;
  padding: 0 2em;
  &:hover {
    background-color: #777;
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
      <StyledBrandingSection className="branding">
        <img src={logo} alt="" className="logo" />
      </StyledBrandingSection>
      <StyledNavigationAndSearchSection>
        <StyledSearchSection>
          <StyledMarketplaceSearchbar placeholder="Search Marketplace" />
          <StyledSearchIconWrapper>
            <StyledSearchIcon icon={faSearch} size="lg"/>
          </StyledSearchIconWrapper>
        </StyledSearchSection>
        <StyledCategoryNavLinkSection>
          <StyledNavLink>
            <span>Video</span>
          </StyledNavLink>{" "}
          |
          <StyledNavLink>
            <span>Audio</span>
          </StyledNavLink>{" "}
          |
          <StyledNavLink>
            <span>Books</span>
          </StyledNavLink>{" "}
          |
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
