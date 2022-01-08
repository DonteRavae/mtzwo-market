import styled from "styled-components";
import { DEVICES } from "../../utils/constants";
import MemberServicesLink from "./MemberServicesLink";

const StyledMemberServicesLink = styled(MemberServicesLink)`
  @media ${DEVICES.LARGE} {
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
      background-color: #612376;
      border: 1px solid white;
    }
    & span {
      margin-left: 0.5em;
      cursor: pointer;
      white-space: nowrap;
    }
  }

  @media ${DEVICES.MEDIUM} {
    height: 30px;
    margin: 0 0.5rem;
    padding: 0.25rem;
    border: 1px solid transparent;
    .member-service-icon {
      color: white;
      cursor: pointer;
      border: 1px solid transparent;
    }
    &:hover {
      border: 1px solid white;
      border-radius: 2px;
      background-color: #612376;
    }
    span {
      display: none;
    }
  }
`;

export const StyledMemberServicesWrapper = styled.section`
  @media ${DEVICES.LARGE} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  @media ${DEVICES.MEDIUM} {
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default StyledMemberServicesLink;
