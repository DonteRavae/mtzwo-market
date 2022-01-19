import styled from "styled-components";
import { DEVICES, THEME } from "../../utils/constants";
import MemberServicesLink from "./MemberServicesLink";

const StyledMemberServicesLink = styled(MemberServicesLink)`
  flex: 1;
  height: 98%;
  display: flex;
  justify-content: left;
  align-items: center;
  font-size: 0.85rem;
  color: white;
  padding: 0 0.5rem;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    background-color: ${THEME.PRIMARY};
    border: 1px solid white;
  }
  & span {
    margin-left: 0.5em;
    cursor: pointer;
    white-space: nowrap;
  }

  @media ${DEVICES.LARGE} {
    height: 30px;
    margin: 0 0.5rem;
    padding: 0.25rem;
    border: 1px solid transparent;
    .member-service-icon {
      color: white;
      cursor: pointer;
      border: 1px solid transparent;
    }
    &#account-nav {
      display: none;
    }
    &:hover {
      border: 1px solid white;
      border-radius: 2px;
      background-color: ${THEME.PRIMARY};
    }
    span {
      display: none;
    }
  }
`;

export const StyledMemberServicesWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media ${DEVICES.LARGE} {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default StyledMemberServicesLink;
