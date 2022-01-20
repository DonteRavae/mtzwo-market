import styled from "styled-components";
import { DEVICES } from "../../utils/constants";
import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  height: 100%;
  padding-top: 0.5rem;
  margin: 0;
  & img {
    height: 175%;
    cursor: pointer;
  }
  @media ${DEVICES.MEDIUM} {
    margin-right: auto;
    margin-left: auto;
    & img {
      height: 165%;
    }
  }
`;

export default StyledLogo;
