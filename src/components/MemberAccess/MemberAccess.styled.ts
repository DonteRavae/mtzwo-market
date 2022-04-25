import styled from "styled-components";

// --- MEMBER ACCESS CONTAINER --- //

export const MemberAccessContainer = styled.article`
  width: 600px;
  border-radius: 3px;
  border: 1px solid #888;
  box-shadow: 1px 1px 5px 1px #888;
  background-color: white;
  overflow: hidden;
`;

// --- MEMBER ACCESS HEADER CONTAINER --- //

export const MemberAccessHeaderContainer = styled.section`
  height: 75px;
  width: 100%;
  display: flex;
`;
// --- MEMBER ACCESS HEADER TAB CONTAINER -- //

type TabProps = {
  active: boolean;
};

export const MemberAccessHeaderTabContainer = styled.div<TabProps>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.active ? "#333" : "#f1f1f1")};
  color:  ${props => props.active ? "white" : "#333"};
  position: relative;
  font-weight: bolder;

  &:hover {
    cursor: pointer;
  }
`;

export const ActiveTabArrowContainer = styled.div`
  height: 15px;
  width: 15px;
  position: absolute;
  background-color: #333;
  top: 68px;
  transform: rotate(45deg);
`;
