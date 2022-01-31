import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInSignUpButton = ({ className, handleClick, icon, title }) => (
  <button className={className} onClick={handleClick}>
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    {title}
  </button>
);

export default SignInSignUpButton;
