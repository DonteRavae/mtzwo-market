import React from "react";
import {
  StyledCategoryNavigationLink,
  StyledCategoryNavigationBar,
} from "./components/CategoryNavigation/CategoryNavigation.styled";

export default {
  title: "Navigation/Category Navigation",
  component: StyledCategoryNavigationBar,
};

export const CategoryNavigationBar = () => (
  <StyledCategoryNavigationBar>
    <StyledCategoryNavigationLink title="Audio" />
    <StyledCategoryNavigationLink title="Video" />
    <StyledCategoryNavigationLink title="Books" />
    <StyledCategoryNavigationLink title="Clothing" />
  </StyledCategoryNavigationBar>
);

export const CategoryNavigationLink = () => (
  <StyledCategoryNavigationLink title="Category" />
);
