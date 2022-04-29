import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

export const ResetPsswd = () => {
  const history = useHistory();

  const [formData, setFormData] = useState({});

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const Alert = () => {
    if (updateData !== 0) {
      return window.alert("Please fill in the form");
    }
  };

  return (
    <ResetWrap>
      <Form>
        <FormBody>
          <Title>Reset Password</Title>
          <InputSection>
            <AiTwotoneMail />
            <Input name="e-mail" type="e-mail" placeholder="Enter your email" />
          </InputSection>
          <Divider />

          <Reset onClick={(() => history.push("/profile"), Alert)}>
            SEND ME A LINK
          </Reset>
          {/* what we want to do her is a fetch to verify if the email entered matches any in the database. If there i a match. it generates an email with a password reset. */}
        </FormBody>
        {""}
        <Footer>
          <TheShameLane to="/signup">
            Forgot email? Get a New Account! It's free!
          </TheShameLane>
          <StartOver to="/">Start Over</StartOver>
        </Footer>
        {""}
      </Form>
    </ResetWrap>
  );
};

const ResetWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem 1rem 1rem 2rem;
  width: 20rem;
  color: darkgray;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.25rem;
  font-size: 2rem;
  font-weight: 300;
  color: whitesmoke;
`;

const Input = styled.input`
  background-color: white;
  width: 13rem;
  height: 2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 1px solid whitesmoke;
  border-radius: 1rem;
  color: gray;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.25rem 0rem 0.75rem 0rem;
`;

const Reset = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 93%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: gray;
  margin-bottom: 1rem;
  background: none;

  :hover {
    background-color: #0f0f0f;
    cursor: pointer;
    color: white;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 0.75rem;
`;

const TheShameLane = styled(Link)`
  background: none;
  color: gray;
  border: 0rem;
  padding: 0.5rem 0rem;
  text-decoration: none;
  font-size: 0.75rem;

  :hover {
    cursor: pointer;
    color: white;
    font-size: 0.75rem;
  }
`;

const StartOver = styled(Link)`
  display: flex;
  flex-direction: row;
  color: whitesmoke;
  background: none;
  border: 0rem;
  text-decoration: none;
  color: gray;

  :hover {
    cursor: pointer;
    color: white;
  }
`;
