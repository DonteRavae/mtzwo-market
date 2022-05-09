import { createRef, useEffect } from "react";
import { GoogleSignInButtonContainer } from "./GoogleSignIn.styled";

declare global {
  interface Window {
    google: any;
  }
}

const google = window.google;

const GoogleSignInButton = () => {
  const spanRef = createRef<HTMLSpanElement>();
  const handleCredentialResponse = (response: any) => {
    console.log("Encoded JWT ID token: " + response.credential);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_SIGN_IN_CLIENT_ID,
      callback: handleCredentialResponse,
    });
    google.accounts.id.renderButton(spanRef.current, {
      theme: "filled_black",
      size: "large",
      text: "continue_with",
      width: "400",
    });

    google.accounts.id.prompt();
  }, [spanRef]);

  return <GoogleSignInButtonContainer ref={spanRef} />;
};

export default GoogleSignInButton;
