import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const MobileMenu = ({ children, className, isActive, user, toggleMobileMenu }) => {
  return (
    <nav className={`${className} ${isActive ? "active" : ""}`}>
      <header className="greeting">
        <h4>{user ? `Welcome back, ${user.name}` : "Hello Guest"}!</h4>
        <FontAwesomeIcon className="exit-icon" size="lg" icon={faTimes} onClick={toggleMobileMenu} />
      </header>
      {children}
    </nav>
  );
};

export default MobileMenu;
