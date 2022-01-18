import styled from "styled-components";
import MobileMenu, { MobileMenuItem } from "./MobileMenu";
import { THEME } from "../../../utils/constants";

export const StyledWrapper = styled.div`
  position: relative;
`;

export const StyledMobileMenuItem = styled(MobileMenuItem)`
  display: flex;
  align-items: center;
  color: white;
  padding: 0 1.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  h3 {
    margin-right: auto;
  }

  &:hover {
    border: 1px solid white;
    background-color: ${THEME.PRIMARY};
    color: white;
  }
`;
const StyledMobileMenu = styled(MobileMenu)`
  header {
    height: 25px;
    display: flex;
    padding-left: 0.7rem;
    background-color: gold;
    h5 {
      margin: auto 0;
    }
  }
  width: 200px;
  background-color: #333;
  // padding-left: 0.75rem;
  box-shadow: 5px 1px 5px #888;
  position: absolute;
  left: -210px;
  transition: all 0.5s ease;
  &.active {
    left: 0;
  }
`;

export default StyledMobileMenu;
