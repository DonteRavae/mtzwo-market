import styled from "styled-components";
import { DEVICES } from "../../utils/constants";
import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  @media ${DEVICES.SMALL} {
    margin-right: auto;
  }
  height: 100%;
  padding-top: 0.5rem;
  & img {
    height: 165%;
    cursor: pointer;
  }
`;

export default StyledLogo;
