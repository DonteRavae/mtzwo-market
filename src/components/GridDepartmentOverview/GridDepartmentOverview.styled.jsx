import styled from "styled-components";
import { THEME } from "../../utils/constants";
import GridDepartmentOverview from "./GridDepartmentOverview";

const StyledGridDepartmentOverview = styled(GridDepartmentOverview)`
  background-color: ${(props) => (props.audio ? THEME.SECONDARY : "")};

  .overview-header {
    width: 100%;
    display: flex;
    padding: 0 4rem;
    align-items: center;

    .market-searchbar {
      height: 60%;
      position: relative;
      margin-left: auto;

      input[type="search"] {
        height: 100%;
        outline: none;
        border-radius: 3px;
        border: none;
        line-height: 30px;
        padding-left: 0.7rem;
        padding-right: 1.7rem;
        font-size: 1.05rem;

        &:focus {
          box-shadow: 0 0 5px #888 inset;
        }
      }

      .search-icon {
        position: absolute;
        right: 0.3rem;
        top: 0.5rem;
        cursor: pointer;
      }
    }
  }

  .department-sections {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin-bottom: 2.5rem;
  }

  .overview-footer {
    height: 50px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: white;
  }
`;

export default StyledGridDepartmentOverview;
