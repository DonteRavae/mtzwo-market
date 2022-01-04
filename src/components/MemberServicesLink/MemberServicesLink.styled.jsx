import styled from "styled-components";
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
    background-color: #612376;
    border: 1px solid white;
  }
  & span {
    margin-left: 0.5em;
    cursor: pointer;
    white-space: nowrap;
  }
`;

export const StyledMemberServicesWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default StyledMemberServicesLink;
