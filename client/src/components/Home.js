import styled from "styled-components";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { Link } from "react-router-dom";
import { COLORS } from "../Constants";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import { ActionBtn } from "../buttons/actionbtn";
import bgOcean from "../assets/bgOcean.mp4";

export const Home = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  // if (!user) {
  //   history.push("/signin");
  // }

  return (
    <>
      {/* <video
        autoPlay="autoPlay"
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          // left: "50%",
          // top: "50%",
          height: "100%",
          objectFit: "cover",
          // transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={bgOcean} type="video/mp4" />
      </video> */}

      <HomeBody>
        <LandingPage>
          <MainLine>Main line of text,</MainLine>
          <Subline>
            Sub line of text with <AccentText>punching line.</AccentText>
          </Subline>
          Easy and proven methods to build solid-rock habbits and break bad
          ones.
          <ActionBtn onClick={() => history.push("/signup")}>
            First Step
          </ActionBtn>
          <span>
            Already have an account? <Link to="/signin">Sign In.</Link>
          </span>
        </LandingPage>
        {/* <Section>
          <span> block1</span>
        </Section> */}
      </HomeBody>
    </>
  );
};

const AccentText = styled.span`
  color: #ff5d18;
  text-shadow: 0.125rem 0.325rem 0.5rem black;
`;

const HomeBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 0px;
`;

const LandingPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 38rem;
  text-align: center;
  /* background-color: cadetblue;
  background-image: linear-gradient(to bottom right, black, #ff7ed5);
  background: url(${bg1});
  background-position-y: top;
  background-position-x: center; */
  background-repeat: no-repeat;
  border: 0px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 48rem;
  background: url(${bg2});
  background-color: lightblue;
  background-position-y: top;
  background-position-x: center;
  margin-top: 20rem;

  span {
    background-color: aquamarine;
  }
`;

const MainLine = styled.div`
  font-weight: 700;
  font-size: 3.25rem;
`;

const Subline = styled.div`
  font-weight: 600;
  font-size: 2.75rem;
  font-style: italic;
  margin: 1rem 0rem;
`;

const BodyText = styled.div``;
