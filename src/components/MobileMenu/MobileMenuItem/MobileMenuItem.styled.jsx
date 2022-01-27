import styled from "styled-components";
import MobileMenuItem from "./MobileMenuItem";
import { DEVICES, THEME } from "../../../utils/constants";

const StyledMobileMenuItem = styled(MobileMenuItem)`
  letter-spacing: 0.05rem;
  @media ${DEVICES.LARGE} {
    display: flex;
    align-items: center;
    color: white;
    padding: 0 1.5rem;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: 1px solid white;
    h3 {
      margin-right: auto;
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
      background-color: ${THEME.PRIMARY};
      color: white;
      &.account-item {
        background-color: #333;
        border: 1px solid transparent;
      }
    }
  }
`;

export default StyledMobileMenuItem;
