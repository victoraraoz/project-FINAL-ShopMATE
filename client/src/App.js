import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { ContactUs } from "./components/ContactUs";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { Confirmation } from "./components/Confirmation";
import { ResetPsswd } from "./components/ResetPsswd";
import { Profile } from "./components/Profile";
import { ActionsPad } from "./components/ActionsPAD/ActionsPAD";
import { Archive } from "./components/ActionsPAD/Archive";
import { Pad } from "./components/ActionsPAD/Pad";
import { Reminders } from "./components/ActionsPAD/Reminders";
import { Trash } from "./components/ActionsPAD/Trash";
import { COLORS } from "./Constants";
import { Link } from "react-router-dom";
import { FiFilePlus } from "react-icons/fi";
import { FiBell } from "react-icons/fi";
import { FiArchive } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import { AppContext } from "./AppContext";

import { useContext } from "react";

function App() {
  const { user } = useContext(AppContext);

  return (
    <GlobalContainer>
      <BrowserRouter>
        <GlobalStyles />
        <Header />

        <MainContent>
          {user && (
            <SideNav>
              <Tab>
                <FiFilePlus /> Pad
              </Tab>
              <Tab>
                <FiBell /> Reminders
              </Tab>
              <Tab>
                <FiArchive /> Archive
              </Tab>
              <Tab>
                <FiTrash2 /> Trash
              </Tab>
            </SideNav>
          )}

          <Main>
            <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>

              <Route exact path="/contactus">
                <ContactUs />
              </Route>

              <Route exact path="/signin">
                <SignIn />
              </Route>

              <Route exact path="/signup">
                <SignUp />
              </Route>

              <Route exact path="/resetpsswd">
                <ResetPsswd />
              </Route>

              <Route exact path="/profile">
                <Profile />
              </Route>

              <Route exact path="/confirmation">
                <Confirmation />
              </Route>

              <Route exact path="/actionspad">
                <ActionsPad />
              </Route>

              <Route exact path="/pad">
                <Pad />
              </Route>

              <Route exact path="/reminders">
                <Reminders />
              </Route>

              <Route exact path="/archive">
                <Archive />
              </Route>

              <Route exact path="/trash">
                <Trash />
              </Route>
            </Switch>
          </Main>
        </MainContent>
      </BrowserRouter>
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
  /* margin: 0px auto; */
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* height: 100vh; */
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #1a1a1a;
`;
const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  width: 13rem;
  border-right: 1px solid #28292c;
`;

const Tab = styled(Link)`
  /* background-color: aliceblue; */
  height: 3rem;
  padding: 1rem;
  border-radius: 0rem 2rem 2rem 0rem;
  :hover {
    color: white;
    background-color: #ff5d18;
  }
`;

export default App;
