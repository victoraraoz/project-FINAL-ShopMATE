import styled from "styled-components";
import logo from "../../assets/Logo_ActionPAD_App.png";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../../AppContext";
import { AiFillCaretDown } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

export const AppHeader = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  return (
    <Header>
      <Section>
        <Logo
          src={logo}
          onClick={() => {
            history.push("/");
          }}
        />
        <Spacer />
        <AppName>Actions</AppName>
        <AppNameBold>PAD</AppNameBold>
        <Spacer />
        <Spacer />
        <Spacer />

        <form>
          <SearchBox>
            <AiOutlineSearch />
            <Input placeholder="Search over 4,072 actions" type="text" />
          </SearchBox>
        </form>
      </Section>
      <Section>
        <Username>
          {" "}
          Username <AiFillCaretDown />
        </Username>
      </Section>
    </Header>
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

const Spacer = styled.div`
  width: 1rem;
  height: 2rem;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 4.063rem;
  background-color: #202124;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  /* border: 5px solid yellow; */
  padding: 0rem 1rem;
  /* background-color: aliceblue; */
`;

const Logo = styled.img`
  width: auto;
  height: 2.5rem;
`;

const Settings = styled.div`
  width: auto;
  /* height: 100%; */
`;

const Avatar = styled.img`
  width: auto;
  height: 2.5;
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

{
  /* <Action
  onClick={() => {
    if (!user) {
      history.push("/signup");
    }
  }}
>
  CREATE YOUR FIST BIT
</Action>; */
}
