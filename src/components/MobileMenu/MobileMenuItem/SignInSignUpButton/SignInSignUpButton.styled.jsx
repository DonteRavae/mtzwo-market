import styled from "styled-components";
import SignInSignUpButton from "./SignInSignUpButton";
import { THEME } from "../../../../utils/constants";

const StyledSignInSignUpButton = styled(SignInSignUpButton)`
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
`;

export default StyledSignInSignUpButton;
