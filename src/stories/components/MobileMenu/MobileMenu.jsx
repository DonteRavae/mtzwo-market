import React from "react";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobileMenuItem = ({ className, title }) => {
  return (
    <article className={className} onClick={() => console.log("clicked!")}>
      <h3>{title}</h3>
      <FontAwesomeIcon icon={faCaretRight} size="lg" />
    </article>
  );
};

const MobileMenu = ({ children, className, isActive }) => {
  return (
    <nav className={`${className} ${isActive ? "active" : ""}`}>
      <header className="greeting">
        <h5>Welcome back, Donte!</h5>
      </header>
      {children}
    </nav>
  );
};

export default MobileMenu;
