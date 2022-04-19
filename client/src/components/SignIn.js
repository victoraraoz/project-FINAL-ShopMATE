import styled from "styled-components";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import bg from "../assets/bg_signin.jpg";

export const SignIn = () => {
  const history = useHistory();

  return (
    <SignInWrap>
      <Form>
        <FormBody>
          <h1>Sign In</h1>
          <InputSection>
            <AiTwotoneMail />
            <Input name="email" type="email" placeholder="Email" />
          </InputSection>
          <Divider />
          <InputSection>
            <AiFillUnlock />
            <Input name="password" type="password" placeholder="Password" />
          </InputSection>

          <SignInButton onClick={() => history.push("/actionspad")}>
            {/* formData={formData} handleClick={handleClick}  || onClick={() => handleClick()} ...inside the Button tag?  */}
            SIGN IN
          </SignInButton>
        </FormBody>

        <ForgotPsswd onClick={() => history.push("/resetpsswd")}>
          Forgot Password
        </ForgotPsswd>
        <SignUp>
          Need an account?{" "}
          <SignUpBtn onClick={() => history.push("/signup")}>
            Sign Up!
          </SignUpBtn>
        </SignUp>
        {""}
      </Form>
    </SignInWrap>

    //form to sign in and sign up. create another component called 'SignUp.js'
  );
};

const SignInWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(${bg});
  background-position-y: center;
  background-position-x: center;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #1a1a1a;
  padding: 2rem;
  border: 0;
  border-radius: 2rem;
  box-shadow: 0rem 1rem 3rem -0.25rem black;
  width: 20rem;
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
  }
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Input = styled.input`
  background-color: #28292c;
  width: 12.75rem;
  height: 2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 0px;
  border-radius: 1rem;

  ::placeholder {
    color: lightgray;
    opacity: 1;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.25rem 0rem 0.25rem 0rem;
`;

const SignInButton = styled.button`
  background-color: #373a42;
  width: 100%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: white;
  margin: 1rem 0rem;
  font-family: "Open Sans", sans-serif;

  :hover {
    background-color: black;
    color: gray;
    cursor: pointer;
  }
`;

const ForgotPsswd = styled.button`
  background: none;
  border: 0rem;
  padding: 0.5rem 0rem;
  font-family: "Open Sans", sans-serif;
  :hover {
    cursor: pointer;
    color: #92e000;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  font-family: "Open Sans", sans-serif;
  /* font-size: 3rem; */
  /* background-color: red; */
`;

const SignUpBtn = styled.button`
background: none;
border: 0px;

    :hover {
      color: #92e000;
      cursor: pointer;
    }
  }
`;
