import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../AppContext";

export const ContactUs = () => {
  const { user } = useContext(AppContext);
  const history = useHistory();

  // if (!user) {
  //   history.push("/signin");
  // }

  return (
    <ContactWrap>
      <ContactContent>
        <Black800>Have questions?</Black800>
        <Bold600Italics> Shoot away!.</Bold600Italics>
        {/* Logo with link to messenger account */}
        <Logos>"Messenger" "LinkedIn" "Email" "Phone"</Logos>
        <BodyText>
          If you dont have any of these means of communication. Please fill our
          contact form and we will get back to you as soon as possible.
        </BodyText>
        <Action onClick={() => history.push("/signup")}>CONTACT FORM</Action>
        Already a member?
        <a href="/signin"> Sign In. </a>
      </ContactContent>
    </ContactWrap>
  );
};

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #373538;
  width: 100%;
  height: 100vh;
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50rem;
  text-align: center;
`;

const Logos = styled.div`
  margin: 2rem 0rem 2rem 0rem;
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
  margin: 2rem;
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

const BodyText = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: white;
  /* margin: 2rem; */
`;
