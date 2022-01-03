import styled from "styled-components";
import MarketSearchbar from "./MarketSearchbar";

const StyledMarketSearchbar = styled(MarketSearchbar)`
  position: relative;
  height: 74px;
  width: 75%;
  display: flex;
  align-items: center;
  & input[type="search"] {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 0.8rem;
    font-size: 1.05em;
    outline: none;
    border-radius: 2px;
    border: none;
  }
  .search-icon {
    position: absolute;
    right: 0.5rem;
    color: #612376;
    cursor: pointer;
  }
`;

export default StyledMarketSearchbar;
