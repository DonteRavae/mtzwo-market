import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import {
  AppHeaderContainer,
  DepartmentNavigationContainer,
  SearchAndLinksContainer,
} from "./AppHeader.styled";
import {
  BestSellersLink,
  CartLink,
  DepartmentNavLink,
  MemberAccessLink,
  WeeklyDealsLink,
} from "./Links/Links";

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

      <MemberAccessLink />
      <CartLink />

      <DepartmentNavigationContainer>
        <DepartmentNavLink destination="catalog/audio">Audio</DepartmentNavLink>
        <DepartmentNavLink destination="catalog/video">Video</DepartmentNavLink>
        <DepartmentNavLink destination="catalog/books">Books</DepartmentNavLink>
        <DepartmentNavLink destination="catalog/clothing">
          Clothing
        </DepartmentNavLink>
      </DepartmentNavigationContainer>
    </AppHeaderContainer>
  );
};

export default AppHeader;
