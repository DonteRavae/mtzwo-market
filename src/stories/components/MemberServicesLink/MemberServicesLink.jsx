import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemberServicesLink = ({ className, title, icon, iconSize }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon
        icon={icon}
        className="member-service-icon"
        size={iconSize}
      />
      <span>{title}</span>
    </div>
  );
};

export default MemberServicesLink;
