import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import { ResetPsswd } from "./components/ResetPsswd";
import { Profile } from "./components/Profile";
import { Lists } from "./components/Lists";
import { Notes } from "./components/Notes";
import { ThankYou } from "./components/thankYou4REG";
import { useContext } from "react";
import { AppContext } from "./AppContext";

// import bg from "./assets/bg_signin.jpg";
// import { COLORS } from "./Constants";

function App() {
  const {
    status,
    setStatus,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  return (
    <>
      <Buffer />
      <AppContainer>
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

            <Route exact path="/notes">
              <Notes />
            </Route>

            <Route exact path="/thankyou">
              <ThankYou />
            </Route>
          </Switch>
          {user ? <Footer /> : <></>}
        </BrowserRouter>
      </AppContainer>
    </>
  );
}

const Buffer = styled.div`
  width: 1px;
  height: 1rem;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22.5rem;
  height: 41.5rem;
  margin: 0px auto;
  border: 1px solid black;
  border-radius: 0.75rem 0.75rem 1.5rem 1.5rem;
  background: #1a1a1a;
`;

export default App;
