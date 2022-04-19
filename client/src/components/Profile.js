import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

export const Profile = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  // if (!user) {
  //   history.push("/signin");
  // }

  return (
    <HomeWrap>
      <HomeContent>
        {/* <Black800>Profile</Black800> */}
        <Bold600Italics> Profile page.</Bold600Italics>
        <Text>Note: Gotta build the profile page.</Text>
        <Action onClick={() => history.push("/signup")}>Button</Action>
      </HomeContent>
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebedeb;
  width: 100%;
  height: 100vh;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 70rem;
  text-align: center;
`;

const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #172035;
  width: 10rem;
  height: 3rem;
  border: 0rem;
  border-radius: 1rem;
  margin-bottom: 1rem;
  color: white;
  font-weight: 600;
  font-style: italic;

  :hover {
    color: #92e000;
    cursor: pointer;
  }
`;

const Black800 = styled.div`
  font-weight: 800;
  font-size: 3.75rem;
`;

const Bold600Italics = styled.div`
  font-weight: 600;
  font-size: 3.5rem;
  font-style: italic;
`;

const Text = styled.div`
  font-size: 1.75rem;
  color: white;
  margin: 2rem;
`;
