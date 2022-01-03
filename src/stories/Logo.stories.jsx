import React from "react";

import Logo from "./components/Logo/Logo";
import StyledLogo from "./components/Logo/Logo.styled";

export default {
  title: "App/Logo",
  component: Logo,
};

export const LogoDefault = () => <Logo />;
export const LogoStyled = () => <StyledLogo size="100px" />;
