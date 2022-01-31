import React, { useState } from "react";
import {
  faCaretRight,
  faHeart,
  faReceipt,
  faUserCircle,
  faUserPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import StyledAccountMenuItem from "./AccountMenuItem/AccountMenutItem.styled";
import StyledSignInSignUpButton from "./SignInSignUpButton/SignInSignUpButton.styled";
import { StyledSubMenu } from "./MobileMenuItem.styled";

const MobileMenuItem = ({
  className,
  title,
  accountItem,
  destination,
  user,
  toggleMenu,
  submenu,
  children,
}) => {
  const [isSubMenuActive, toggleIsSubMenuActive] = useState(false);
  const navigate = useNavigate();
  const navigateToSignIn = () => {
    toggleMenu();
    navigate("/signin");
  };
  const navigateToSignUp = () => {
    toggleMenu();
    navigate("/signup");
  };
  const navigateToDestination = () => {
    toggleMenu();
    navigate(`/${destination}`);
  }
  const toggleSubMenu = () => {
    toggleIsSubMenuActive(!isSubMenuActive);
  };
  return accountItem ? (
    <article className={`${className} account-item`}>
      <h3>{title}</h3>
      <hr />
      {user ? (
        <div className="account-menu-items">
          <StyledAccountMenuItem title="Profile" icon={faUserCircle} />
          <StyledAccountMenuItem title="Orders" icon={faReceipt} />
          <StyledAccountMenuItem title="Wishlist" icon={faHeart} />
        </div>
      ) : (
        <div className="account-menu-items guest">
          <StyledSignInSignUpButton
            icon={faUserPlus}
            title="Sign Up"
            handleClick={navigateToSignUp}
          />
          <StyledSignInSignUpButton
            icon={faUser}
            title="Sign In"
            handleClick={navigateToSignIn}
          />
        </div>
      )}
    </article>
  ) : (
    <article className={className} onClick={ submenu ? toggleSubMenu : navigateToDestination }>
      <h3>{title}</h3>
      {submenu ? (
        <FontAwesomeIcon
          icon={faCaretRight}
          size="lg"
          rotation={isSubMenuActive ? 90 : 0}
        />
      ) : null}
      {isSubMenuActive ? <StyledSubMenu>{children}</StyledSubMenu> : null}
    </article>
  );
};

export default MobileMenuItem;
