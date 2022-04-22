import styled from "styled-components";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { BiPlayCircle } from "react-icons/bi";
import bg from "../assets/bg_main.jpg";

export const Lists = () => {
  const history = useHistory();
  const { user } = useContext(AppContext);

  if (!user) {
    history.push("/");
  }

  return (
    <Wrap>
      <Subheader>
        <Input type="text" placeholder="NEW LIST" />
        <Add>+</Add>
      </Subheader>

      <Listas>
        {/* <Form> */}

        {/* </Form> */}
      </Listas>
      <Divider />
      <Items>Selected list above</Items>
      <PgTab />
    </Wrap>
  );
};

const PgTab = styled.div`
  width: 7.5rem;
  height: 0.188rem;
  background-color: #b7bc00;
`;

const Divider = styled.div`
  background-color: #b7bc00;
  width: 100%;
  height: 1px;
`;

const Wrap = styled.div`
  /* background-color: #1a1a1a; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  background-color: black;
  background-position-y: center;
  background-position-x: center;
`;

const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 1rem;
  height: 2.5rem;
  background-color: #b7bc00;
`;

const Listas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 13.125rem;
  text-align: center;
  border: 0px;
  background: none;
`;

const Items = styled.div`
  height: 18.75rem;
  background: none;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: 20rem;
  background-color: green;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: 0;
  padding-left: 1rem;
  background-color: #b7bc00;
  font-size: 1.25rem;
  color: white;

  :hover {
    color: white;
  }

  ::placeholder {
    color: white;
    font-size: 1rem;
    font-weight: 600;
  }

  :hover {
    color: #28292c;
  }
`;

const Add = styled.button`
  background-color: #d0d358;
  border: 0rem;
  border-radius: 1.5rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  width: 2rem;
  height: 2rem;

  :hover {
    color: black;
    cursor: pointer;
  }
`;
