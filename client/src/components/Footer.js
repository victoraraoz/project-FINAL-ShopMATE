import styled from "styled-components";
import { BiCheckSquare } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiOutlineRead } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Wrap>
      <ListBtn to="/lists">
        <AiOutlineUnorderedList size="1.5rem" />
      </ListBtn>

      <Divider />

      <PadBtn to="/notes">
        <AiOutlineRead size="1.5rem" />
      </PadBtn>

      <Divider />

      <UserBtn to="profile">
        <BiUser size="1.5rem" />
      </UserBtn>
    </Wrap>
  );
};

const Divider = styled.div`
  background-color: #28292c;
  width: 1px;
  height: 100%;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 3rem;
  background-color: #070707;
  font-size: 0.75em;
  color: lightgray;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
`;

const ListBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
  border: 0;
  border-radius: 0rem 0rem 0rem 1.5rem;
  height: 100%;
  width: 7.5rem;
  background: none;

  :hover {
    color: #92e000;
    cursor: pointer;
    background-color: #101010;
  }
`;

const UserBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0rem 0rem 1.5rem 0rem;
  padding: 0 25px 0 25px;
  color: lightgray;

  border: 0;
  height: 100%;
  width: 7.5rem;
  background: none;

  :hover {
    color: #ff130c;
    cursor: pointer;
    background-color: #101010;
  }
`;

const PadBtn = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px 0 25px;
  color: lightgray;
  background: none;
  border: 0;
  height: 100%;
  width: 7.5rem;

  :hover {
    color: #0bc2dd;
    cursor: pointer;
    background-color: #101010;
  }
`;
