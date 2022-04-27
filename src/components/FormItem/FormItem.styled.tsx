import styled, { css } from "styled-components";

const shrinkLabel = css`
  top: -3px;
  left: 0;
  font-size: 14px;
`;

// --- FORM INPUT CONTAINER --- //

export const FormInputContainer = styled.input`
  position: relative;
  height: ${({ type }) => (type === "checkbox" ? "" : "100%")};
  width: ${({ type }) => (type === "checkbox" ? "" : "100%")};
  outline: none;
  border: none;
  font-size: 18px;
  padding-left: 10px;
  padding-top: 20px;
  line-height: 21px;

  &:focus ~ label {
    ${({ type }) => (type === "checkbox" ? "" : shrinkLabel)};
    span {
      display: contents;
    }
  }
`;

// --- LABEL CONTAINER --- //

interface LabelProps {
  type: string;
}

const labelStyle = css`
  font-size: 18px;
  position: absolute;
  top: 20px;
  left: 10px;
  transition: 300ms ease all;
`;

const checkboxLabelStyle = css`
  position: relative;
  font-size: 14px;
  margin-left: 3px;
`;

const getLabelStyle = ({ type }: LabelProps) => {
  if (type === "checkbox") {
    return checkboxLabelStyle;
  }
  return labelStyle;
};

export const FormInputLabelContainer = styled.label<LabelProps>`
  ${getLabelStyle}

  span {
    color: red;
    display: none;
  }

  &.shrink {
    ${shrinkLabel}
    span {
      display: contents;
    }
  }
`;

// --- FORM ITEM CONTAINER --- //

type FormItemProp = {
  type?: React.HTMLInputTypeAttribute;
  message?: string;
};

export const FormItemContainer = styled.section<FormItemProp>`
  height: ${({ type }) => (type === "checkbox" ? "" : "50px")};
  width: ${({ type }) => (type === "checkbox" ? "141px" : "100%")};
  position: relative;
  margin-bottom: ${({ type }) => (type === "checkbox" ? "auto" : "35px")};
  margin-right: auto;
  margin-left: ${({ type }) => (type === "checkbox" ? "45px" : "auto")};

  input {
    border-bottom: ${({ message }) =>
      message ? "1px solid red" : "1px solid black"};
  }

  input[type="password"] {
    letter-spacing: 0.3rem;
  }
`;

export const InputMessageContainer = styled.span`
  color: red;
  font-size: 12px;
`;
