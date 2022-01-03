import React from "react";
import StyledMemberServicesLink from "./components/MemberServicesLink/MemberServicesLink.styled";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Navigation/Member Services Link",
  component: StyledMemberServicesLink,
};

export const MemberServicesLink = () => (
  <StyledMemberServicesLink title="default" icon={faUserCircle} iconSize="lg" />
);
