import {
  faUserCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import {
  AppHeaderContainer,
  DepartmentNavigationContainer,
  SearchAndLinksContainer,
} from "./AppHeader.styled";
import {
  BestSellersLink,
  DepartmentNavLink,
  WeeklyDealsLink,
} from "./Links/Links";
import { LinksContainer } from "./Links/Links.styled";

const AppHeader = () => {
  return (
    <AppHeaderContainer>
      <Logo />

      <SearchAndLinksContainer>
        <WeeklyDealsLink />
        <Searchbar
          id="marketplaceSearch"
          placeholder="Search Marketplace"
          name="marketplaceSearch"
          iconSize="lg"
        />
        <BestSellersLink />
      </SearchAndLinksContainer>

      <LinksContainer id="memberAccessLink">
        <FontAwesomeIcon icon={faUserCircle} size="lg" />
        <span>Sign In</span>
      </LinksContainer>

      <LinksContainer id="cartLink">
        <FontAwesomeIcon icon={faShoppingCart} size="lg" />
        <span>Cart</span>
      </LinksContainer>

      <DepartmentNavigationContainer>
        <DepartmentNavLink destination="audio">Audio</DepartmentNavLink>
        <DepartmentNavLink destination="video">Video</DepartmentNavLink>
        <DepartmentNavLink destination="books">Books</DepartmentNavLink>
        <DepartmentNavLink destination="clothing">Clothing</DepartmentNavLink>
      </DepartmentNavigationContainer>
    </AppHeaderContainer>
  );
};

export default AppHeader;
