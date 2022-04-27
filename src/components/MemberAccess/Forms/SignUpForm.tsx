import React, { ChangeEventHandler, useState } from "react";
import {
  EMAIL_VALIDATION,
  ERROR,
  PASSWORD_VALIDATION,
} from "../../../utils/constants";

import CustomButton from "../../CustomButton/CustomButton";
import FormItem from "../../FormItem/FormItem";
import {
  FormContainer,
  FormExtrasContainer,
  FormFooterContainer,
  FormHeaderContainer,
  PrivacyAndTermsContainer,
  ThirdPartyAccessContainer,
} from "./Forms.styled";

const SignUpForm = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState<string>("");
  const [firstNameInput, setFirstNameInput] = useState<string>("");
  const [lastNameInput, setLastNameInput] = useState<string>("");
  const [rememberMeInput, toggleRememberMe] = useState<boolean>(true);
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [confirmPasswordMessage, setConfirmPasswordMessage] =
    useState<string>("");

  // --- HANDLERS --- //
  const handleEmailInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailInput(event.currentTarget.value);
  };

  const handlePasswordInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "password") setPasswordInput(value);
    else if (name === "confirmPassword") setConfirmPasswordInput(value);
  };

  const handleEmailValidity: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.currentTarget;
    if (!EMAIL_VALIDATION.test(value) && value.length > 0)
      setEmailMessage(ERROR.INVALID_EMAIL);
    else setEmailMessage("");
  };

  const handlePasswordValidity: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.currentTarget;
    if (name === "password") {
      if (!PASSWORD_VALIDATION.test(value) && value.length > 0)
        setPasswordMessage(ERROR.INVALID_PASSWORD);
      else setPasswordMessage("");
    } else if (name === "confirmPassword") {
      if (value !== passwordInput && value.length > 0)
        setConfirmPasswordMessage(ERROR.INVALID_PASSWORD_MATCH);
      else setConfirmPasswordMessage("");
    }
  };

  const handleNameInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.currentTarget;
    if (name === "firstName") setFirstNameInput(value);
    else if (name === "lastName") setLastNameInput(value);
  };

  const toggleChecked: ChangeEventHandler<HTMLInputElement> = (event): void => {
    toggleRememberMe(event.currentTarget.checked);
  };

  return (
    <FormContainer
      onSubmit={(event) => {
        event.preventDefault();
        console.log({
          emailInput,
          passwordInput,
          confirmPasswordInput,
          firstNameInput,
          lastNameInput,
          rememberMeInput,
        });
      }}
    >
      <FormHeaderContainer>
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
        name="email"
        pattern={EMAIL_VALIDATION.source}
        placeholder="Email"
        id="signUpEmail"
        message={emailMessage}
        required
        handleInput={handleEmailInput}
        handleChange={handleEmailValidity}
      />
      <FormItem
        name="password"
        type="password"
        pattern={PASSWORD_VALIDATION.source}
        message={passwordMessage}
        placeholder="Password"
        id="signUpPassword"
        title="8-15 characters  |  [ !  @  # $ % ^ & * ]  |  at least 1 lowercase or uppercase"
        required
        handleInput={handlePasswordInput}
        handleChange={handlePasswordValidity}
      />
      <FormItem
        name="confirmPassword"
        type="password"
        pattern={PASSWORD_VALIDATION.source}
        message={confirmPasswordMessage}
        placeholder="Confirm Password"
        id="signUpConfirmPassword"
        title="8-15 characters  |  [ !  @  # $ % ^ & * ]  |  at least 1 lowercase or uppercase"
        required
        handleInput={handlePasswordInput}
        handleChange={handlePasswordValidity}
      />
      <FormItem
        name="firstName"
        placeholder="First Name"
        id="signUpFirstName"
        required
        handleInput={handleNameInput}
      />
      <FormItem
        name="lastName"
        placeholder="Last Name"
        id="signUpLastName"
        required
        handleInput={handleNameInput}
      />

      <FormExtrasContainer>
        <FormItem
          placeholder="Remember Me"
          name="rememberMe"
          id="rememberMeCheckbox"
          type="checkbox"
          handleInput={toggleChecked}
          checked={rememberMeInput}
        />
      </FormExtrasContainer>

      <CustomButton type="submit" width="375px">
        Create Account
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

export default SignUpForm;
