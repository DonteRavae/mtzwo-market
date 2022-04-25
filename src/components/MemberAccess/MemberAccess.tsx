import React, { useState } from "react";
import SignInForm from "./Forms/SignInForm";
import SignUpForm from "./Forms/SignUpForm";
import {
  ActiveTabArrowContainer,
  MemberAccessContainer,
  MemberAccessHeaderContainer,
  MemberAccessHeaderTabContainer,
} from "./MemberAccess.styled";

const MemberAccess = () => {
  const [signInActive, setSignInActive] = useState<boolean>(true);

  return (
    <MemberAccessContainer>
      <MemberAccessHeaderContainer>
        <MemberAccessHeaderTabContainer
          active={signInActive}
          onClick={() => setSignInActive(true)}
        >
          SIGN IN
          {signInActive ? <ActiveTabArrowContainer /> : null}
        </MemberAccessHeaderTabContainer>
        <MemberAccessHeaderTabContainer
          active={!signInActive}
          onClick={() => setSignInActive(false)}
        >
          CREATE AN ACCOUNT
          {!signInActive ? <ActiveTabArrowContainer /> : null}
        </MemberAccessHeaderTabContainer>
      </MemberAccessHeaderContainer>

      {signInActive ? <SignInForm /> : <SignUpForm />}
    </MemberAccessContainer>
  );
};

export default MemberAccess;
