import React from "react";
import StyledMarketSearchbar from "./components/MarketSearchbar/MarketSearchbar.styled";

export default {
  title: "Search/Market Searchbar",
  component: StyledMarketSearchbar,
};

export const MarketSearchbar = () => (
  <StyledMarketSearchbar placeholder="Search Marketplace" iconSize="lg" />
);
