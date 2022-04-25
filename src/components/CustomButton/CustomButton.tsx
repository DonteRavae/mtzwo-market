import React from "react";
import { CustomButtonContainer } from "./CustomButton.styled";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  width?: string;
  thirdParty?: boolean;
  children: React.ReactNode;
  handleClick?(event: React.MouseEvent<HTMLButtonElement>): void;
};

const CustomButton = ({
  type,
  width,
  thirdParty,
  children,
  handleClick,
}: ButtonProps) => (
  <CustomButtonContainer
    type={type}
    width={width}
    thirdParty={thirdParty}
    onClick={handleClick}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
