import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiFilePlus } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { Archive } from "./Archive";

export const AppBody = () => {
  return (
    <Main>
      <MainBody> App content </MainBody>
    </Main>
  );
};

const Main = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1a1a1a;
`;

const MainBody = styled.div``;
