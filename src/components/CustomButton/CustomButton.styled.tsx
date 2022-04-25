import styled, { css } from "styled-components";
import { THEME } from "../../utils/constants";

const invertedStyle = css`
  background-color: white;
  border: 2px solid ${THEME.PRIMARY};
  color: ${THEME.PRIMARY};
  font-weight: bold;
`;

const invertedThirdPartyStyle = css`
  background-color: ${THEME.PRIMARY};
  border: 1px solid transparent;
  color: white;
  font-weight: bold;
`;

const buttonStyle = css`
  background-color: ${THEME.PRIMARY};
  color: white;

  &:hover {
    ${invertedStyle}
  }
`;

const thirdPartyStyle = css`
  background-color: white;
  color: ${THEME.PRIMARY};
  border: 1px solid ${THEME.PRIMARY};

  &:hover {
    ${invertedThirdPartyStyle}
  }
`;

type ButtonProps = {
  width?: string;
  thirdParty?: boolean;
};

const getButtonStyles = (props: ButtonProps) => {
  if (props.thirdParty) {
    return thirdPartyStyle;
  }

  return buttonStyle;
};

export const CustomButtonContainer = styled.button<ButtonProps>`
  height: 60px;
  width: ${(props) => props.width || "295px"};
  cursor: pointer;
  outline: none;
  border: 2px solid transparent;
  font-weight: bold;
  transition: 200ms ease-in-out all;

  ${getButtonStyles}
`;
