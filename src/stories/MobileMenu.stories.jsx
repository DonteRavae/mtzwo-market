import React, { useState } from "react";
import StyledMobileMenu, {
  StyledMobileMenuItem,
} from "./components/MobileMenu/MobileMenu.styled";

export default {
  title: "Navigation/Mobile Menu",
  component: StyledMobileMenu,
};

export const MobileMenuV2 = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="wrapper">
      <button style={{marginBottom: "0.5rem"}} onClick={() => setActive(!active)}>Open</button>
      <StyledMobileMenu isActive={active}>
        <StyledMobileMenuItem title="New Releases" />
        <StyledMobileMenuItem title="Audio" />
        <StyledMobileMenuItem title="Video" />
        <StyledMobileMenuItem title="Books" />
        <StyledMobileMenuItem title="Clothing" />
        <StyledMobileMenuItem title="Deals" />
        <StyledMobileMenuItem title="Account" accountItem user/>
      </StyledMobileMenu>
    </div>
  );
};
