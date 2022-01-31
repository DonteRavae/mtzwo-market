import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemberServicesLink = ({ className, title, icon, iconSize, destination, id }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(destination);
  return (
    <div id={id} className={className} onClick={handleClick}>
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
