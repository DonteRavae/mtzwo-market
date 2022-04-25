import styled from "styled-components";

// --- FORM CONTAINER COMPONENT --- //

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 50px;
`;

// --- FORM HEADER COMPONENT --- //

export const FormHeaderContainer = styled.header`
  width: 100%;
  margin-top: 20px;
  text-align: center;

  h2 {
    margin-top: 0;
  }
`;

// --- THIRD PARY SIGN IN CONTAINER --- //

export const ThirdPartyAccessContainer = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding-bottom: 25px;
  border-bottom: 1px solid #777;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;

  span {
    position: absolute;
    left: 233px;
    top: 73px;
    font-size: 12px;
    background-color: white;
    width: 30px;
    text-align: center;
  }
`;

// --- FORM EXTRAS COMPONENT --- //

export const FormExtrasContainer = styled.section`
  width: 100%;
  height: 20px;
  display: flex;
  margin-top: 10px;
  margin-bottom: 30px;
  align-items: center;
`;

// --- FORGOT PASSWORD CONTAINER --- //

export const ForgotPasswordContainer = styled.a`
  margin-right: 45px;
  // margin-bottom: 21px;
  color: red;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
`;

// --- PRIVACY AND TERMS CONTAINER --- //

export const PrivacyAndTermsContainer = styled.p`
  padding: 0 60px;
  font-size: 12px;
  text-align: center;
`;

// --- FORM FOOTER COMPONENT --- //

export const FormFooterContainer = styled.footer`
  width: 100%;
  margin-bottom: 20px;
`;
