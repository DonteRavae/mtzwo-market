import React from "react";
import { useNavigate } from "react-router-dom";


const DealsPageLink = ({ className, title, destination }) => {
  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(`/${destination}`)
  }
  return (
    <div className={className} onClick={navigateToPage}>
      <span>{title}</span>
    </div>
  );
};

export default DealsPageLink;
