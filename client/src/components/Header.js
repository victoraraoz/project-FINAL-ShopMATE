import styled from "styled-components";
import logo from "../assets/Logo_ActionsPAD_App.png";
// import { useHistory } from "react-router-dom";
// import { useContext } from "react";
// import { AppContext } from "../AppContext";
// import { Link } from "react-router-dom";
// import { AiFillCaretDown } from "react-icons/ai";
// import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  // const history = useHistory();
  // const { user, setUser } = useContext(AppContext);

  return (
    <HeadWrap>
      <Logo src={logo} />
      <AppName>Shop</AppName>
      <Bold>Mate</Bold>
    </HeadWrap>
  );
};

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3.5rem;
  background-color: black;
`;

const Logo = styled.img`
  height: 2.25rem;
  width: auto;
  border: 0;
`;

const AppName = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 0.5rem;
  /* text-transform: uppercase; */
`;

const Bold = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  /* text-transform: uppercase; */
`;
