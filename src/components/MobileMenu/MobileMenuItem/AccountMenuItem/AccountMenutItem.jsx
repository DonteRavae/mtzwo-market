import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountMenuItem = ({ icon, title }) => (
  <div className="account-menu-item">
    <FontAwesomeIcon icon={icon} className="account-menu-item-icon" size="lg" />
    <h3>{title}</h3>
  </div>
);

export default AccountMenuItem;