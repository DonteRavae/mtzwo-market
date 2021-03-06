import { useState, ChangeEventHandler, FormEvent } from "react";
import CustomButton from "../../CustomButton/CustomButton";
import FormItem from "../../FormItem/FormItem";
import {
  ForgotPasswordContainer,
  FormContainer,
  FormExtrasContainer,
  FormFooterContainer,
  FormHeaderContainer,
  PrivacyAndTermsContainer,
  ThirdPartyAccessContainer,
} from "./Forms.styled";

const SignInForm = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [rememberMeInput, toggleRememberMe] = useState<boolean>(true);

  const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    const { value } = event.currentTarget;
    setEmailInput(value);
    if (event.currentTarget.validity.patternMismatch)
      event.currentTarget.setCustomValidity("Invalid email address");
    else event.currentTarget.setCustomValidity("");
  };

  const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (
    event
  ): void => {
    setPasswordInput(event.currentTarget.value);
  };

  const toggleChecked: ChangeEventHandler<HTMLInputElement> = (event): void => {
    toggleRememberMe(event.currentTarget.checked);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log({
      emailInput,
      passwordInput,
      rememberMeInput,
    });
  };
  
  return (
    <FormContainer
      onSubmit={handleSubmit}
    >
      <FormHeaderContainer>
        <h2>Welcome back!</h2>
        <ThirdPartyAccessContainer>
          <CustomButton type="button" width="225px" thirdParty>
            Facebook
          </CustomButton>
          <CustomButton type="button" width="225px" thirdParty>
            Google
          </CustomButton>
          <span>OR</span>
        </ThirdPartyAccessContainer>
      </FormHeaderContainer>

      <FormItem
        placeholder="Email"
        name="email"
        id="signInEmail"
        type="email"
        handleInput={handleEmailInput}
        required
      />
      <FormItem
        placeholder="Password"
        name="password"
        id="signInPassword"
        type="password"
        handleInput={handlePasswordInput}
        required
      />

      <FormExtrasContainer>
        <FormItem
          placeholder="Remember Me"
          name="rememberMe"
          id="rememberMeCheckbox"
          type="checkbox"
          checked={rememberMeInput}
          handleInput={toggleChecked}
        />

        <ForgotPasswordContainer>Forgot Password?</ForgotPasswordContainer>
      </FormExtrasContainer>

      <CustomButton width="375px" type="submit">
        Sign In
      </CustomButton>

      <FormFooterContainer>
        <PrivacyAndTermsContainer>
          By logging in, you agree to Mt. Zion World Outreach's{" "}
          <a href="/privacypolicy">Privacy Policy</a> and{" "}
          <a href="/termsofuse">Terms of Use</a>.
        </PrivacyAndTermsContainer>
      </FormFooterContainer>
    </FormContainer>
  );
};

export default SignInForm;
