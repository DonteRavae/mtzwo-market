export const EMAIL_VALIDATION = RegExp(/^(\w+@[a-zA-Z_]+?\.[a-zA-Z\.]{2,6})$/);
export const PASSWORD_VALIDATION = RegExp(
  /^((?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Za-z]).{8,15})$/
);

export enum THEME {
  PRIMARY = "#612376",
  SECONDARY = "#da9a25",
}

export enum SIZES {
  SMALL = "576px",
  SMEDIUM = "577px",
  MEDIUM = "768px",
  LARGE = "992px",
  XLARGE = "1200px",
  XXLARGE = "1400px",
}

export const DEVICES = {
  SMALL: `(max-width: ${SIZES.SMALL})`,
  SMEDIUM: `(max-width: ${SIZES.SMEDIUM})`,
  MEDIUM: `(max-width: ${SIZES.MEDIUM})`,
  LARGE: `(max-width: ${SIZES.LARGE})`,
  XLARGE: `(max-width: ${SIZES.XLARGE})`,
  XXLARGE: `(max-width: ${SIZES.XXLARGE})`,
};

export enum ERROR {
  INVALID_EMAIL = "Please enter a valid email.",
  INVALID_PASSWORD = "Please enter a valid password.",
  INVALID_PASSWORD_MATCH = "Passwords do not match.",
}
