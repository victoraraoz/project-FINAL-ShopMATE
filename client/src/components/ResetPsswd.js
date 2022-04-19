import styled from "styled-components";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export const ResetPsswd = () => {
  const history = useHistory();

  return (
    <ResetWrap>
      <Form>
        <FormBody>
          <h1>Reset Password</h1>
          <InputSection>
            <AiTwotoneMail />
            <Input name="e-mail" type="e-mail" placeholder="Enter your email" />
          </InputSection>
          <Divider />

          <SignInButton onClick={() => history.push("/profile")}>
            {/* formData={formData} handleClick={handleClick}  || onClick={() => handleClick()} ...inside the Button tag?  */}
            SEND ME A LINK
          </SignInButton>
        </FormBody>
        {""}
        <Footer>
          <SOL onClick={() => history.push("/sol")}>Forgot email?</SOL>

          <StartOver>
            <a onClick={() => history.push("/")}>Start Over</a>
          </StartOver>
        </Footer>
        {""}
      </Form>
    </ResetWrap>

    //form to sign in and sign up. create another component called 'SignUp.js'
  );
};

const ResetWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh;
  background-color: #f2f3f2;
  /* background-image: url("./assets/bg_signin.jpg"); */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 2rem;
  /* border: 1px solid lightgray; */
  border-radius: 1.5rem;
  box-shadow: 0rem 2rem 8rem -0.5rem black;
  width: 20rem;
  color: darkgray;
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    display: flex;
    justify-content: center;
    padding-bottom: 2.25rem;
    font-size: 2rem;
    font-weight: 300;
    color: black;
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Input = styled.input`
  background-color: white;
  width: 13rem;
  height: 2rem;
  padding-left: 0.5rem;
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

const SignInButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  width: 100%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: white;
  margin-bottom: 1rem;

  :hover {
    background-color: black;
    cursor: pointer;
  }
`;

const Icon = styled.div``;

const Button = styled.button`
  background: none;
`;

const Footer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-size: 0.75rem;
  background-color: whitesmoke;
  border: 0rem;
`;

const StartOver = styled.div`
  display: flex;
  flex-direction: row;
  color: gray;

  a {
    color: brown;
    padding-left: 0.25rem;

    :hover {
      color: black;
      cursor: pointer;
    }
  }
`;

const SOL = styled.button`
  background: none;
  color: gray;
  border: 0rem;
  padding: 0.5rem 0rem;

  :hover {
    cursor: pointer;
    color: black;
    font-weight: 300;
  }
`;
