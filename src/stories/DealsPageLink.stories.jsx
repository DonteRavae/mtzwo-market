import React from "react";
import StyledDealsPageLink from "./components/DealsPageLink/DealsPageLink.styled";

export default {
  title: "Navigation/Deals Page Link",
  component: StyledDealsPageLink,
};

export const DealsLink = () => <StyledDealsPageLink title="default" />;
export const BlackDealsLink = () => (
  <StyledDealsPageLink title="default" color="black" />
);
