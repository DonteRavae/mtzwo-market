import styled from "styled-components";

// --- APP HEAD CONTAINER --- //

export const AppHeaderContainer = styled.header`
  height: 85px;
  width: 100%;
  background-color: #333;
  box-shadow: 0 2px 3px #999;
  padding: 0 25px;
  display: grid;
  grid-template-columns: 166px 1fr 166px;
  grid-template-rows: repeat(2, 42.5px);
  grid-template-areas:
    "logo search  memberAccess"
    "logo deptNav cart";

  .logo {
    grid-area: logo;
    padding-top: 10px;
    height: 160%;
  }
`;

// --- SEARCH AND LINKS CONTAINER --- //

export const SearchAndLinksContainer = styled.section`
  grid-area: search;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  padding-top: 12px;
`;

// --- DEPARTMENT NAVIGATION CONTAINER --- //

export const DepartmentNavigationContainer = styled.section`
  grid-area: deptNav;
  width: 100%;
  height: calc(100% + 25px);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15px;
`;
