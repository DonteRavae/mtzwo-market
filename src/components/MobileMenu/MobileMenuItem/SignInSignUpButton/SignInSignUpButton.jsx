import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignInSignUpButton = ({ handleClick, icon, title }) => (
  <button onClick={handleClick}>
    <span>
      <FontAwesomeIcon icon={icon} />
    </span>
    {title}
  </button>
);

export default SignInSignUpButton;
