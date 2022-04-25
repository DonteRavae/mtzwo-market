import styled from "styled-components";
import { THEME } from "../../utils/constants";

// --- SEARCHBAR FORM CONTAINER --- //

export const SearchbarFormContainer = styled.form`
  width: 80%;
  heigth: 100%;
  position: relative;

  .search-icon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
    color: ${THEME.PRIMARY};
    cursor: pointer;
  }
`;

// --- SEARCHBAR INPUT CONTAINER --- //

export const SearchbarInputContainer = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 3px;
  border: none;
  outline: none;
  padding-left: 0.8rem;
  padding-right: 2.5rem;
  font-size: 1.1rem;

  &:focus {
    box-shadow: 0 0 5px #888 inset;
  }
`;

// --- SEARCHBAR LABEL CONTAINER --- //

export const SearchbarLabelContainer = styled.label``;
