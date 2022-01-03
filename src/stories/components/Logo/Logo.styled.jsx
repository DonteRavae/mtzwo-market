import styled from "styled-components";
import Logo from "./Logo";

const StyledLogo = styled(Logo)`
  height: ${({ size }) => size || "100%"};
  padding: 0 0.5rem;
  & img {
    height: 100%;
    cursor: pointer;
  }
`;

export default StyledLogo;
