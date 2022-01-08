import styled from "styled-components";
import { DEVICES } from "../../utils/constants";
import {
  CategoryNavigationBar,
  CategoryNavigationLink,
} from "./CategoryNavigation";

export const StyledCategoryNavigationLink = styled(CategoryNavigationLink)`
  @media ${DEVICES.LARGE} {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 21px;
    cursor: pointer;
    border: 1px solid #333;
    border-radius: 3px;
    box-shadow: 0 2px 4px #888;
    background-color: white;
    margin: 0 2.5rem;
    & span {
      text-transform: uppercase;
      font-size: 0.8em;
    }
    &:hover {
      background-color: #612376;
      color: white;
    }
  }
  @media ${DEVICES.SMALL} {
    display: none;
  }
`;
export const StyledCategoryNavigationBar = styled(CategoryNavigationBar)`
  @media ${DEVICES.LARGE} {
    width: 100%;
    display: flex;
    color: #333;
    font-weight: 600;
  }
`;
