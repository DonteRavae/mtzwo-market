import styled from "styled-components";
import {
  CategoryNavigationBar,
  CategoryNavigationLink,
} from "./CategoryNavigation";

export const StyledCategoryNavigationLink = styled(CategoryNavigationLink)`
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
export const StyledCategoryNavigationBar = styled(CategoryNavigationBar)`
  width: 98%;
  display: flex;
  color: #333;
  background-color: white;
  border: 1px solid #333;
  font-weight: 600;
  border-radius: 3px;
  box-shadow: 0 2px 4px #888;
`;
