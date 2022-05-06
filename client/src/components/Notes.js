import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { BiCalendarCheck } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";
import { AppContext } from "../AppContext";
import { useContext } from "react";

export const Notes = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);

  if (!user) {
    history.push("/");
  }

  return (
    <Wrap>
      <Subheader>Notes</Subheader>
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
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid #3399ff;
  background-color: black;
`;

const Subheader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: white;
  padding-left: 1rem;
  background-color: #3399ff;
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
