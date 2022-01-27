import styled from "styled-components";
import AccountMenuItem from "./AccountMenutItem";
import { THEME } from "../../../../utils/constants";


const StyledAccountMenuItem = styled(AccountMenuItem)`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  border: 1px solid transparent;
  .account-menu-item-icon {
    margin-left: auto;
  }
  h3 {
    margin-left: 0.75rem;
    margin-right: auto;
  }
  &:hover {
    background-color: ${THEME.PRIMARY};
    border: 1px solid white;
  }
`;


export default StyledAccountMenuItem;