import styled from "styled-components";
import { DEVICES, SIZES, THEME } from "../../utils/constants";

export const StyledHeader = styled.header`
  height: 80px;
  width: 100vw;
  display: flex;
  background-color: #333;
  box-shadow: 0 2px 3px #888;
  align-items: center;
  padding: 0.25rem 1.5rem;

  @media (min-width: ${SIZES.LARGE}) {
    .menu-icon {
      display: none;
    }
  }

  @media ${DEVICES.MEDIUM} {
    height: 75px;
    padding: 0 1.5rem;

    .menu-icon {
      height: 30px;
      width: 30px;
      color: white;
      cursor: pointer;
      padding: 0.25rem;
      border: 1px solid transparent;
      margin-left: 0.5rem;
      &:hover {
        border: 1px solid white;
        border-radius: 2px;
        background-color: ${THEME.PRIMARY};
      }
    }
  }
`;
export const StyledNavigationAndSearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  @media ${DEVICES.SMALL} {
    height: 100%;
    width: 45px;
    display: flex;
    align-items: center;
  }
`;
