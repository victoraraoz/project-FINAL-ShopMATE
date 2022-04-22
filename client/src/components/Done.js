import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BiCalendarCheck } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export const Done = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);

  if (!user) {
    history.push("/");
  }

  return (
    <Wrap>
      <Subheader>DONE</Subheader>
      <Container>
        <Items>
          <BiCalendarCheck color="lightgray" size="3.5rem" />
          <Item>Chickend </Item>
          <FromList> Super C </FromList>
          <TrashBtn>
            <BiTrashAlt color="lightgray" size="1.25rem" />
          </TrashBtn>
        </Items>
      </Container>
      <PgTab />
    </Wrap>
  );
};

const PgTab = styled.div`
  align-self: flex-end;
  width: 7.5rem;
  height: 0.188rem;
  background-color: #0bc2dd;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
`;

const Subheader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  padding-left: 1rem;
  background-color: #0bc2dd;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1.5rem 2rem 1.5rem;
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
  width: 100%;
  height: 2.5rem;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding-left: 1rem;
`;
const FromList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-right: 1.5rem;
  color: gray;
  width: 100%;
`;
const TrashBtn = styled.button`
  background: none;
  border: 0rem;
  :hover {
    cursor: pointer;
    color: red;
  }
`;
