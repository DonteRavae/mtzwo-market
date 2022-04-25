import styled from "styled-components";

// --- MEMBER ACCESS CONTAINER --- //

export const MemberAccessContainer = styled.article`
  width: 445px;
  border-radius: 3px;
  border: 1px solid #888;
  box-shadow: 1px 1px 5px 2px #888;
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
  background-color: ${(props) => (props.active ? "#333" : "#888")};
  font-size: 18px;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;
