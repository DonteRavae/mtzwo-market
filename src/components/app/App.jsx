import React, { useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import StyledMobileMenu from "../MobileMenu/MobileMenu.styled";
import StyledMobileMenuItem from "../MobileMenu/MobileMenuItem/MobileMenuItem.styled";
import LandingPage from "../../pages/Landing/Landing.page";

const App = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };
  return (
    <main className="App">
      {/* Header */}
      <AppHeader
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuActive={isMobileMenuActive}
      />
      <StyledMobileMenu
        isActive={isMobileMenuActive}
        toggleMobileMenu={toggleMobileMenu}
      >
        <StyledMobileMenuItem title="New Releases" submenu>
          <StyledMobileMenuItem
            title="Audio"
            toggleMenu={toggleMobileMenu}
            destination="audio/newreleases"
          />
          <StyledMobileMenuItem
            title="Video"
            toggleMenu={toggleMobileMenu}
            destination="video/newreleases"
          />
          <StyledMobileMenuItem
            title="Podcasts"
            toggleMenu={toggleMobileMenu}
            destination="audio/podcasts/newreleases"
          />
        </StyledMobileMenuItem>
        <StyledMobileMenuItem title="Audio" submenu>
          <StyledMobileMenuItem
            title="Sunday Service"
            toggleMenu={toggleMobileMenu}
            destination="audio/sundayservice"
          />
          <StyledMobileMenuItem
            title="Wednesday Bible Study"
            toggleMenu={toggleMobileMenu}
            destination="audio/biblestudy"
          />
          <StyledMobileMenuItem
            title="Podcasts"
            toggleMenu={toggleMobileMenu}
            destination="audio/podcasts"
          />
          <StyledMobileMenuItem
            title="Special Guests"
            toggleMenu={toggleMobileMenu}
            destination="audio/specialguests"
          />
          <StyledMobileMenuItem
            title="All Audio"
            toggleMenu={toggleMobileMenu}
            destination="audio/"
          />
        </StyledMobileMenuItem>
        <StyledMobileMenuItem title="Video" submenu>
          <StyledMobileMenuItem
            title="Sunday Service"
            toggleMenu={toggleMobileMenu}
            destination="video/sundayservice"
          />
          <StyledMobileMenuItem
            title="Wednesday Bible Study"
            toggleMenu={toggleMobileMenu}
            destination="video/biblestudy"
          />
          <StyledMobileMenuItem
            title="Special Guests"
            toggleMenu={toggleMobileMenu}
            destination="video/specialguests"
          />
          <StyledMobileMenuItem
            title="Performances"
            toggleMenu={toggleMobileMenu}
            destination="video/performances"
          />
          <StyledMobileMenuItem
            title="All Video"
            toggleMenu={toggleMobileMenu}
            destination="video"
          />
        </StyledMobileMenuItem>
        <StyledMobileMenuItem title="Books" toggleMenu={toggleMobileMenu} />
        <StyledMobileMenuItem title="Clothing" submenu>
          <StyledMobileMenuItem
            title="Men"
            toggleMenu={toggleMobileMenu}
            destination="clothing/men"
          />
          <StyledMobileMenuItem
            title="Women"
            toggleMenu={toggleMobileMenu}
            destination="clothing/women"
          />
          <StyledMobileMenuItem
            title="Kids"
            toggleMenu={toggleMobileMenu}
            destination="clothing/kids"
          />
          <StyledMobileMenuItem
            title="Hats"
            toggleMenu={toggleMobileMenu}
            destination="clothing/hats"
          />
          <StyledMobileMenuItem
            title="All Clothes"
            toggleMenu={toggleMobileMenu}
            destination="clothing"
          />
        </StyledMobileMenuItem>
        <StyledMobileMenuItem title="Deals" submenu>
          <StyledMobileMenuItem
            title="Deals of the Week"
            toggleMenu={toggleMobileMenu}
            destination="deals/weeklydeals"
          />
          <StyledMobileMenuItem
            title="Member Deals"
            toggleMenu={toggleMobileMenu}
            destination="deals/memberdeals"
          />
          <StyledMobileMenuItem
            title="Top Deals"
            toggleMenu={toggleMobileMenu}
            destination="deals/topdeals"
          />
          <StyledMobileMenuItem
            title="Gift Ideas"
            toggleMenu={toggleMobileMenu}
            destination="deals/gifts"
          />
        </StyledMobileMenuItem>
        <StyledMobileMenuItem
          title="Account"
          accountItem
          toggleMenu={toggleMobileMenu}
        />
      </StyledMobileMenu>
      {/* Routes between pages */}
      <LandingPage />
    </main>
  );
};

export default App;
