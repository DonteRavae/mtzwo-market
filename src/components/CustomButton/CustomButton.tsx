import React from "react";
import { CustomButtonContainer } from "./CustomButton.styled";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  className?: string;
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
  className,
  handleClick,
}: ButtonProps) => (
  <CustomButtonContainer
    type={type}
    width={width}
    thirdParty={thirdParty}
    onClick={handleClick}
    className={className}
  >
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
