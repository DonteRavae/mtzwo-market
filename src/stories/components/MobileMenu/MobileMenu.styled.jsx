import styled from "styled-components";
import MobileMenu, { MobileMenuItem } from "./MobileMenu";
import { THEME } from "../../../utils/constants";
export const StyledMobileMenuItem = styled(MobileMenuItem)`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 1.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  border-bottom: 1px solid;
  
  h3 {
    margin-right: auto;
  }

  &.account-item {
    flex-direction: column;
    border: 1px solid transparent;
    cursor: default;
    // background-color: #444;

    hr {
      width: 90%;
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
        padding: 0 5%;
        justify-content: space-evenly;

        button {
          height: 40px;
          width: 30%;
          border: none;
          border-radius: 2px;
          outline: none;
          background-color: gold;
          color: ${THEME.PRIMARY};
          box-shadow: 1px 1px 1px white;

          span {
            margin-right: 0.5rem;

            svg {
              filter: drop-shadow(1px 1px #333);
            }
          }

          &:hover {
            border: 2px solid white;
            background-color: ${THEME.PRIMARY};
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }

  &:hover {
    border: 1px solid white;
    background-color: ${THEME.PRIMARY};
    color: white;

    &.account-item {
      background-color: #333;
      border: 1px solid transparent;
    }
  }
`;
const StyledMobileMenu = styled(MobileMenu)`
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
  width: 100%;
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
`;

export default StyledMobileMenu;
