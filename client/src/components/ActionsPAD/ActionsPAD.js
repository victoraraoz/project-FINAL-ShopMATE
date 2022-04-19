import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { AppHeader } from "./AppHeader";
import { AppBody } from "./AppBody";

export const ActionsPad = () => {
  // const { user } = useContext(AppContext);
  // const history = useHistory();

  return (
    <AppWrapp>
      <AppBody />
    </AppWrapp>
  );
};

const AppWrapp = styled.div`
  display: flex;
  flex-direction: column;
  background: #ebedeb;
  width: 100%;
  height: 100vh;
`;
