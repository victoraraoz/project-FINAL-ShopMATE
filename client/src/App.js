import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { ResetPsswd } from "./components/ResetPsswd";
import { Lists } from "./components/Lists";
import { Profile } from "./components/Profile";
import { Done } from "./components/Done";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import bg from "./assets/bg_signin.jpg";
import { COLORS } from "./Constants";

function App() {
  return (
    <GlobalContainer>
      <BrowserRouter>
        <GlobalStyles />
        <Header />

        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>

          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/resetpsswd">
            <ResetPsswd />
          </Route>

          <Route exact path="/lists">
            <Lists />
          </Route>

          <Route exact path="/profile">
            <Profile />
          </Route>

          <Route exact path="/done">
            <Done />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </GlobalContainer>
  );
}

const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 22.5rem;
  height: 41.5rem;
  margin: 0px auto;

  border: 1px solid black;
  background: url(${bg});
  background-position-x: left;
  background-position-y: center;
  background-size: cover;
`;

export default App;
