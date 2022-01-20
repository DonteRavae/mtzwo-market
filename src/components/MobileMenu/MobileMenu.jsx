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

export const MobileMenuItem = ({
  className,
  title,
  accountItem,
  user,
  toggleMenu,
}) => {
  const navigate = useNavigate();
  const navigateToSignIn = (e) => {
    e.preventDefault();
    navigate("/signin");
    toggleMenu();
  };
  const navigateToSignUp = (e) => {
    e.preventDefault();
    navigate("/signup");
    toggleMenu();
  };
  return accountItem ? (
    <article className={`${className} account-item`}>
      <h3>{title}</h3>
      <hr />
      {user ? (
        <div className="account-menu-items">
          <div className="account-menu-item">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="account-menu-item-icon"
              size="lg"
            />
            <h3>Profile</h3>
          </div>
          <div className="account-menu-item">
            <FontAwesomeIcon
              icon={faReceipt}
              className="account-menu-item-icon"
              size="lg"
            />
            <h3>Orders</h3>
          </div>
          <div className="account-menu-item">
            <FontAwesomeIcon
              icon={faHeart}
              className="account-menu-item-icon"
              size="lg"
            />
            <h3>Wishlist</h3>
          </div>
        </div>
      ) : (
        <div className="account-menu-items guest">
          <button onClick={navigateToSignUp}>
            <span>
              <FontAwesomeIcon icon={faUserPlus} />
            </span>
            Sign Up
          </button>
          <button onClick={navigateToSignIn}>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>
            Sign In
          </button>
        </div>
      )}
    </article>
  ) : (
    <article className={className}>
      <h3>{title}</h3>
      <FontAwesomeIcon icon={faCaretRight} size="lg" />
    </article>
  );
};

const MobileMenu = ({ children, className, isActive, user }) => {
  return (
    <nav className={`${className} ${isActive ? "active" : ""}`}>
      <header className="greeting">
        <h4>{user ? `Welcome back, ${user.name}` : "Hello Guest"}!</h4>
      </header>
      {children}
    </nav>
  );
};

export default MobileMenu;
