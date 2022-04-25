import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { THEME } from "../../../utils/constants";

// --- LINKS CONTAINER --- //

export const LinksContainer = styled.div`
  height: 100%;
  width: 50px;
  color: white;
  cursor: pointer;
  text-align: center;

  &#memberAccessLink {
    grid-area: memberAccess;
  }

  &#cartLink {
    grid-area: cart;
  }
  
  &#memberAccessLink,
  &#cartLink {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 3.5rem;

    span {
      margin-left: 0.5rem;
    }
  }

  &:hover {
    text-decoration: underline;
  }
`;

// --- DEPARTMENT NAV LINK CONTAINER --- //

export const NavLinkContainer = styled(NavLink)`
  height: 30px;
  width: 220px;
  text-align: center;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 2px 4px #888;
  border: 1px solid black;
  color: ${THEME.PRIMARY};
  text-decoration: none;
  padding-top: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
  text-transform: uppercase;

  &.active,
  &:hover {
    background-color: ${THEME.PRIMARY};
    color: white;
    border: 1px solid #333;
  }
`;
