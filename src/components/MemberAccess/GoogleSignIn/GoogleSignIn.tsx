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
      client_id:
        "411822260912-tkc910m0ebckulue7nd3956navtpe8f0.apps.googleusercontent.com",
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
