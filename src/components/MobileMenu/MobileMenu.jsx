import React from "react";

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
