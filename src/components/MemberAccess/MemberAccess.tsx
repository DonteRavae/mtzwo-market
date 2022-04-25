import React, { useState } from "react";
import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUpForm";
import {
  MemberAccessContainer,
  MemberAccessHeaderContainer,
  MemberAccessHeaderTabContainer,
} from "./MemberAccess.styled";

const MemberAccess = () => {
  const [signInActive, setSignInActive] = useState<boolean>(true);
  const [signUpActive, setSignUpActive] = useState<boolean>(false);

  const handleSignInTab = (): void => {
    setSignInActive(true);
    setSignUpActive(false);
  };

  const handleSignUpTab = (): void => {
    setSignUpActive(true);
    setSignInActive(false);
  };

  return (
    <MemberAccessContainer>
      <MemberAccessHeaderContainer>
        <MemberAccessHeaderTabContainer
          active={signInActive}
          onClick={handleSignInTab}
        >
          SIGN IN
        </MemberAccessHeaderTabContainer>
        <MemberAccessHeaderTabContainer
          active={signUpActive}
          onClick={handleSignUpTab}
        >
          CREATE AN ACCOUNT
        </MemberAccessHeaderTabContainer>
      </MemberAccessHeaderContainer>

      {signInActive ? <SignInForm /> : <SignUpForm />}
    </MemberAccessContainer>
  );
};

export default MemberAccess;
