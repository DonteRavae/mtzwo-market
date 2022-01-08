import styled from "styled-components";
import { DEVICES } from "../../utils/constants";
import DealsPageLink from "./DealsPageLink";

const StyledDealsPageLink = styled(DealsPageLink)`
  display: none;
// @media ${DEVICES.LARGE} {
  //   width: 4rem;
  //   height: 60%;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   font-weight: 600;
  //   padding: 0 1.5rem;
  //   color: ${({ color }) => color || "white"};
  //   text-align: center;
  //   cursor: pointer;
  //   border: 1px solid transparent;
  //   &:hover {
  //     background-color: #612376;
  //     border: 1px solid white;
  //   }
  // }
`;

export default StyledDealsPageLink;
