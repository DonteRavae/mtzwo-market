import styled from "styled-components";
import MobileMenuItem from "./MobileMenuItem";
import { DEVICES, THEME } from "../../../utils/constants";

const StyledMobileMenuItem = styled(MobileMenuItem)`
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
        .account-menu-item {
          width: 90%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto;
          border: 1px solid transparent;
          .account-menu-item-icon {
            margin-left: auto;
          }
          h3 {
            margin-left: 0.75rem;
            margin-right: auto;
          }
          &:hover {
            background-color: ${THEME.PRIMARY};
            border: 1px solid white;
          }
        }
        &.guest {
          display: flex;
          padding: 0;
          justify-content: space-evenly;
          button {
            height: 40px;
            width: 30%;
            border: none;
            border-radius: 2px;
            outline: none;
            background-color: ${THEME.SECONDARY};
            color: ${THEME.PRIMARY};
            span {
              margin-right: 0.5rem;
              svg {
                filter: drop-shadow(1px 1px #333);
              }
            }
            &:hover {
              background-color: ${THEME.PRIMARY};
              color: white;
              cursor: pointer;
            }
          }
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
