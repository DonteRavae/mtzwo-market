import styled from "styled-components";
import { DEVICES, THEME } from "../../utils/constants";
import MarketSearchbar from "./MarketSearchbar";

const StyledMarketSearchbar = styled(MarketSearchbar)`
  position: relative;
  height: 74px;
  width: 65%;
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
    color: ${THEME.PRIMARY};
    cursor: pointer;
  }

  @media ${DEVICES.SMALL} {
    height: 100%;
    input[type="search"] {
      display: none;
    }
    .search-icon {
      height: 30px;
      width: 30px;
      padding: 0.25rem;
      color: white;
      cursor: pointer;
      border: 1px solid transparent;
      &:hover {
        border: 1px solid white;
        border-radius: 2px;
        background-color: ${THEME.PRIMARY};
      }
    }
  }
`;

export default StyledMarketSearchbar;
