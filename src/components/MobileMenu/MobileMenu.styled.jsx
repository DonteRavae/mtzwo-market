import styled from "styled-components";
import MobileMenu from "./MobileMenu";
import { DEVICES, THEME } from "../../utils/constants";

const StyledMobileMenu = styled(MobileMenu)`
  display: none;

  @media ${DEVICES.LARGE} {
    height: 100%;
    display: initial;
    header {
      height: 40px;
      display: flex;
      padding-left: 1.5rem;
      background-color: gold;
      color: ${THEME.PRIMARY};
      h4 {
        margin: auto 0;
      }
    }
    width: 50%;
    background-color: #333;

    box-shadow: 5px 1px 5px #888;
    position: absolute;
    left: -105%;
    transition: all 0.3s 0.1s ease-in-out;
    &.active {
      left: 0;
    }

    & .user-nav {
      display: flex;
      align-items: center;
      color: white;
      padding: 0 1.5rem;
      cursor: pointer;
      border: 1px solid transparent;
    }
  }

  @media ${DEVICES.SMEDIUM} {
    width: 100%;
  }
`;

export default StyledMobileMenu;
