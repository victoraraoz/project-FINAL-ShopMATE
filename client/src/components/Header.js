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
    <>
      <HeadWrap>
        <Logo src={logo} />
        <AppName>Shop</AppName>
        <Bold>Mate</Bold>
      </HeadWrap>
      <Cap />
    </>
  );
};

const Cap = styled.div`
  background: #28292c;
  width: 100%;
  height: 1px;
`;

const HeadWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 3.5rem;
  background-color: #070707;
  border-radius: 0.75rem 0.75rem 0rem 0rem;
`;

const Logo = styled.img`
  height: 2.25rem;
  width: auto;
  border: 0;
`;

const AppName = styled.div`
  color: whitesmoke;
  font-size: 2rem;
  font-weight: 300;
  margin-left: 0.75rem;
  /* text-transform: uppercase; */
`;

const Bold = styled.div`
  color: whitesmoke;
  font-size: 1.75rem;
  font-weight: 700;
  font-style: italic;
  text-transform: uppercase;
`;
