import React, {
  KeyboardEventHandler,
  ChangeEventHandler,
  useState,
} from "react";

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

  // --- HANDLERS --- //
  const handleEmailInput: KeyboardEventHandler<HTMLInputElement> = (event) => {
    setEmailInput(event.currentTarget.value);
  };

  const handlePasswordInput: KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.currentTarget;
    if (name === "password") setPasswordInput(value);
    else if (name === "confirmPassword") setConfirmPasswordInput(value);
  };

  const handleNameInput: KeyboardEventHandler<HTMLInputElement> = (event) => {
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
        type="email"
        placeholder="Email"
        id="signUpEmail"
        required
        handleChange={handleEmailInput}
      />
      <FormItem
        name="password"
        type="password"
        placeholder="Password"
        id="signUpPassword"
        required
        handleChange={handlePasswordInput}
      />
      <FormItem
        name="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        id="signUpConfirmPassword"
        required
        handleChange={handlePasswordInput}
      />
      <FormItem
        name="firstName"
        placeholder="First Name"
        id="signUpFirstName"
        required
        handleChange={handleNameInput}
      />
      <FormItem
        name="lastName"
        placeholder="Last Name"
        id="signUpLastName"
        required
        handleChange={handleNameInput}
      />

      <FormExtrasContainer>
        <FormItem
          placeholder="Remember Me"
          name="rememberMe"
          id="rememberMeCheckbox"
          type="checkbox"
          handleChange={toggleChecked}
          checked={rememberMeInput}
        />
      </FormExtrasContainer>

      <CustomButton type="submit" width="375px" >Create Account</CustomButton>

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
