import React from "react";

export const CategoryNavigationLink = ({ className, title }) => {
  return (
    <div className={className}>
      <span>{title}</span>
    </div>
  );
};

export const CategoryNavigationBar = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};
