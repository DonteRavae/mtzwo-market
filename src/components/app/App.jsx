import React, { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import StyledMobileMenu from "../MobileMenu/MobileMenu.styled";
import StyledMobileMenuItem from "../MobileMenu/MobileMenuItem/MobileMenuItem.styled";

const App = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <main className="App">
      {/* Header */}
      <AppHeader toggleMobileMenu={toggleMobileMenu} isMobileMenuActive={isMobileMenuActive} />
      <StyledMobileMenu isActive={isMobileMenuActive}>
        <StyledMobileMenuItem title="New Releases" />
        <StyledMobileMenuItem title="Audio" />
        <StyledMobileMenuItem title="Video" />
        <StyledMobileMenuItem title="Books" />
        <StyledMobileMenuItem title="Clothing" />
        <StyledMobileMenuItem title="Deals" />
        <StyledMobileMenuItem title="Account" accountItem toggleMenu={toggleMobileMenu}/>
      </StyledMobileMenu>
      {/* Routes between pages */}
    </main>
  );
};

export default App;
