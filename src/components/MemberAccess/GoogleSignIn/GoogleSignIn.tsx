import { createRef, useEffect } from "react";
import { GoogleSignInButtonContainer } from "./GoogleSignIn.styled";

declare global {
  interface Window {
    google: any;
  }
}

const google = window.google;

const GoogleSignInButton = () => {
  const divRef = createRef<HTMLDivElement>();
  const handleCredentialResponse = (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_SIGN_IN_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(divRef.current, {
      theme: "outline",
      size: "large",
      text: "signup_with"
    });

    google.accounts.id.prompt();
  }, [divRef]);

  return (
    <GoogleSignInButtonContainer ref={divRef}></GoogleSignInButtonContainer>
  );
};

export default GoogleSignInButton;
