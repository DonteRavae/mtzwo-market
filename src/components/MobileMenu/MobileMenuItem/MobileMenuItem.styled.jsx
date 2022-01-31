import styled from "styled-components";
import MobileMenuItem from "./MobileMenuItem";
import { DEVICES, THEME } from "../../../utils/constants";

export const StyledSubMenu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  article {
    padding: 0 1.75rem;
    border: none;
    font-size: 0.8rem;
    &:hover {
      text-decoration: underline;
      &.account-item {
        background-color: #333;
        border: 1px solid transparent;
      }
    }
  }
`;

const StyledMobileMenuItem = styled(MobileMenuItem)`
  letter-spacing: 0.05rem;
  @media ${DEVICES.LARGE} {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    color: white;
    // padding: 0 1.5rem;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: 1px solid white;
    h3 {
      padding-left: 1.5rem;
      margin-right: auto;
    }
    svg {
      margin-right: 1.5rem;
    }
    &.account-item {
      flex-direction: column;
      border: 1px solid transparent;
      cursor: default;
      hr {
        width: 95%;
      }
      .account-menu-items {
        width: 100%;
        margin: 1rem 0;

        &.guest {
          display: flex;
          padding: 0;
          justify-content: space-evenly;
        }
      }
    }
    &:hover {
      // background-color: ${THEME.PRIMARY};
      // color: white;
      &.account-item {
        background-color: #333;
        border: 1px solid transparent;
      }
    }
  }
`;

export default StyledMobileMenuItem;
