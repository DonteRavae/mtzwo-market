import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MarketSearchbar = ({ className, placeholder, name, id, iconSize }) => {
  return (
    <div className={`${className} market-searchbar`}>
      <input type="search" name={name} id={id} placeholder={placeholder} />
      <FontAwesomeIcon
        icon={faSearch}
        size={iconSize}
        className="search-icon"
      />
    </div>
  );
};

export default MarketSearchbar;
