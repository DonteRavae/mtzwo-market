import React from "react";
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

const MobileMenuItem = ({
  className,
  title,
  accountItem,
  user,
  toggleMenu,
  submenu,
}) => {
  const navigate = useNavigate();
  const navigateToSignIn = (e) => {
    e.preventDefault();
    toggleMenu();
    navigate("/signin");
  };
  const navigateToSignUp = (e) => {
    e.preventDefault();
    toggleMenu();
    navigate("/signup");
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
    <article className={className}>
      <h3>{title}</h3>
      {submenu ? <FontAwesomeIcon icon={faCaretRight} size="lg" /> : null}
    </article>
  );
};

export default MobileMenuItem;
