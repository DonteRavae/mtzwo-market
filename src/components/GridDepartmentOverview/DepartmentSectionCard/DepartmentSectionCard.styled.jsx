import styled from "styled-components";
import DepartmentSectionCard from "./DepartmentSectionCard";
import { Link } from "react-router-dom";
import { THEME } from "../../../utils/constants";

export const StyledLink = styled(Link)`
  color: ${THEME.PRIMARY};
  text-decoration: none;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledDepartmentSectionCard = styled(DepartmentSectionCard)`
margin-top: -3%;
  width: 300px;
  height: 350px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: white;
  box-shadow: 2px 2px 1px #888;

  .section-card-header {
    height: 5%;
    width: 100%;
    text-align: right;
    padding-top: 0.2rem;
    padding-right: 0.5rem;
  }

  .product-grid {
    display: flex;
    justify-content: space-evenly;
    flex-flow: row wrap;
    padding: 0.1rem 0.3rem;
    margin-bottom: 0.2rem;

    .product-grid-link {
      height: 50%;
      width: 45%;
      padding: 0.25rem;
      border: 1px solid black;
      border-radius: 3px;
      cursor: pointer;
      // outline-offset: -4px;
      // outline: 5px solid #333;
      margin: 0.7rem 0.3rem;
      box-shadow: 2px 2px 1px #888;

      figure {
        height: 100%;

        img {
          height: 100%;
          width: 100%;
        }
      }

      h6 {
        margin: 0;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }

      &:hover {
        box-shadow: 0 0 3px #888 inset;
      }
    }
  }
  .product-grid-footer {
    padding-top: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;    
    // border-top: 1px solid black;
    h3 {
      margin: 0;
      text-align: center;
    }
  }
`;

export default StyledDepartmentSectionCard;
