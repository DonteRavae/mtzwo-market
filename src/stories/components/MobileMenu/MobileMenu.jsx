import React from "react";
import { faCaretRight, faHeart, faReceipt, faUserCircle, faUserPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobileMenuItem = ({ className, title, accountItem, user }) => {
  return accountItem ? (
    <article
      className={`${className} account-item`}
      onClick={() => console.log("clicked!")}
    >
      <h3>{title}</h3>
      {/* <FontAwesomeIcon icon={faCaretRight} size="lg" /> */}
      <hr />
      {user ? 
        <div className="account-menu-items">
          <div className="account-menu-item">
            <FontAwesomeIcon icon={faUserCircle} className="account-menu-item-icon" size="lg"/>
            <h3>Profile</h3>
          </div>
          <div className="account-menu-item">
            <FontAwesomeIcon icon={faReceipt} className="account-menu-item-icon" size="lg"/>
            <h3>Orders</h3>
          </div>
          <div className="account-menu-item">
            <FontAwesomeIcon icon={faHeart} className="account-menu-item-icon" size="lg"/>
            <h3>Wishlist</h3>
          </div>
        </div> 
        : 
        <div className="account-menu-items guest">
          <button><span><FontAwesomeIcon icon={faUserPlus} /></span>Sign Up</button>
          <button><span><FontAwesomeIcon icon={faUser} /></span>Sign In</button>
        </div>
      }
    </article>
  ) : (
    <article className={className} onClick={() => console.log("clicked!")}>
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
