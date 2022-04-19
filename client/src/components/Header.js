import styled from "styled-components";
import logo from "../assets/Logo_ActionPAD_App.png";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const Header = () => {
  const History = useHistory();
  const { user } = useContext(AppContext);

  return (
    <HeadWrap>
      <Accent />
      <InnerWrap>
        <LeftSection>
          <HomeLink onClick={() => History.push("/")}>
            <Logo src={logo} />
          </HomeLink>
          <AppName>Actions</AppName>
          <AppNameBold>PAD</AppNameBold>
          {user && (
            <SearchBox>
              <AiOutlineSearch />
              <Input placeholder="Search over 4,072 actions" type="text" />
            </SearchBox>
          )}
        </LeftSection>
        {/* {user} */}
        <RightSection>
          {/* use conditional rendering to show either the signing button or the user logged in // <SearchBox>Search</SearchBox> */}
          {/* <NavBtn onClick={() => History.push("/contactus")}>CONTACT US</NavBtn> */}
          {user ? (
            <Username>
              Username <AiFillCaretDown />
            </Username>
          ) : (
            <>
              <NavBtn onClick={() => History.push("/signin")}>SIGN IN</NavBtn>
              <NavBtnSignUp onClick={() => History.push("/signup")}>
                SIGN UP
              </NavBtnSignUp>
            </>
          )}
        </RightSection>
      </InnerWrap>
    </HeadWrap>
  );
};

const Input = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  font-size: 0.75em;
  background-color: #3a3a3a;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  color: black;

  ::placeholder {
    color: gray;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  max-width: 20rem;
  height: 30px;
  font-family: sans-serif;
  font-size: 0.75em;
  background-color: #3a3a3a;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  color: black;
`;

const Username = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #ff5d18;
  border-radius: 1.125rem;
  width: 8rem;
  height: 2.125rem;
  font-weight: 700;
  text-decoration: none;
  :hover {
    color: #1a1a1a;
  }
`;

const Accent = styled.div`
  width: 100%;
  height: 0.25rem;
  /* background-color: #92e000; */
  background-image: linear-gradient(to right, #ff459f, #ff5d18);
  position: relative;
`;

const HeadWrap = styled.div`
  width: 100%;
  min-height: 4rem;
  background-color: black;
`;

const InnerWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.75rem;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;

  height: 100%;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HomeLink = styled.button`
  background: none;
  border: 0;

  :hover {
    cursor: pointer;
  }
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

const AppNameBold = styled.div`
  color: whitesmoke;
  font-size: 1.5rem;
  font-weight: 700;
  font-style: italic;
  /* text-transform: uppercase; */
`;

const NavBtn = styled.button`
  height: 100%;
  padding: 0rem 2rem;
  border: 0;
  color: gray;
  font-size: 0.75em;
  background: none;
  :hover {
    color: white;
    cursor: pointer;
    background-color: #373a42;
  }
`;

const NavBtnSignUp = styled.button`
  height: 100%;
  /* width: 8rem; */
  font-size: 0.75em;
  color: lightgray;
  border: 0;
  background: none;
  padding: 0rem 2rem;

  :hover {
    color: white;
    font-weight: 300;
    cursor: pointer;
    background-color: #ff5d18;
  }
`;

// const Badge = styled.span`
//   position: absolute;
//   /* bottom: -1px; */
//   top: 4px;
//   right: -1px;
//   font-size: 0.8em;
//   color: white;
//   background-color: red;
//   border-radius: 5000px;
//   padding: 4px;
// `;
