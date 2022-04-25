import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  SearchbarFormContainer,
  SearchbarInputContainer,
  SearchbarLabelContainer,
} from "./Searchbar.styled";

type SearchbarProps = {
  id: string;
  placeholder: string;
  name: string;
  iconSize?: SizeProp;
};

export type SizeProp =
  | "xs"
  | "lg"
  | "sm"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";

const Searchbar = ({ id, placeholder, name, iconSize }: SearchbarProps) => {
  return (
    <SearchbarFormContainer>
      <SearchbarInputContainer
        id={id}
        type="search"
        placeholder={placeholder}
        name={name}
      />
      <SearchbarLabelContainer htmlFor={id}>
        <span className="visually-hidden">{placeholder}</span>
      </SearchbarLabelContainer>
      <FontAwesomeIcon
        icon={faSearch}
        size={iconSize}
        className="search-icon"
      />
    </SearchbarFormContainer>
  );
};

export default Searchbar;
