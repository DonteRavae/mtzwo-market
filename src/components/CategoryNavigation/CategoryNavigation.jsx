import React from "react";
import { NavLink } from "react-router-dom";

export const CategoryNavigationLink = ({ className, title, destination }) => {
  return (
    <NavLink className={className} to={destination}>
      <span>{title}</span>
    </NavLink>
  );
};

export const CategoryNavigationBar = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};
