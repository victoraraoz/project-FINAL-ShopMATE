import styled from "styled-components";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext, useState } from "react";
import bg from "../assets/bg_signin.jpg";

export const SignUp = () => {
  const history = useHistory();
  const { user, email, password, setStatus, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({});

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const handleSubmit = () => {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message == "Success") {
          history.push("/lists");
          setUser(data.data);
        }
      })
      .catch((err) => console.log(err.stack));
  };

  return (
    <SignUpWrap>
      <Form onSubmit={handleSubmit}>
        <FormBody>
          <h1>Sign Up</h1>
          <InputSection>
            <AiTwotoneMail />
            <Input
              name="email"
              type="email"
              placeholder="Enter a valid email"
              onChange={(e) => {
                updateData("email", e.target.value);
              }}
            />
          </InputSection>
          <Divider />
          <InputSection>
            <AiFillUnlock />
            <Input
              name="password"
              type="password"
              placeholder="Enter a password"
              onChange={(e) => {
                updateData("password", e.target.value);
              }}
            />
          </InputSection>
          <Divider />
          <InputSection>
            <AiFillUnlock />
            <Input
              name="confirmpassword"
              type="password"
              placeholder="Confirm password"
            />
          </InputSection>

          <SignUpBtn>SIGN UP</SignUpBtn>
        </FormBody>
        {""}
        <Footer>
          Already a member?{" "}
          <SignInBtn onClick={() => history.push("/")}>Sign In</SignInBtn>
        </Footer>
      </Form>
    </SignUpWrap>
  );
};

const SignUpWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  height: 100vh;
  background: url(${bg});
  background-color: black;
  background-position-y: center;
  background-position-x: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 2rem;
  border: 1px solid lightgray;
  border-radius: 2rem;
  box-shadow: 0rem 1rem 3rem -0.5rem #373a42;
  width: 20rem;
  /* height: 32rem; */
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

const SignInBtn = styled.button`
  background: none;
  border: 0rem;
  font-family: "Open Sans", sans-serif;
  :hover {
    color: #ff5d18;
    cursor: pointer;
  }
`;

const Label = styled.div`
  align-self: flex-start;
  margin-bottom: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: black;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Input = styled.input`
  background-color: white;
  width: 12.5rem;
  height: 2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 1px solid white;
  border-radius: 1rem;
  color: gray;
  :hover {
    border: 1px solid #ff130c;
  }

  ::placeholder {
    color: lightgray;
    opacity: 1;
  }
  :focus {
    border: 1px solid #92e000;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: lightgray; */
  margin: 0.25rem 0rem 0.25rem 0rem;
`;

const SignUpBtn = styled.button`
  background-color: #373a42;
  width: 100%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: white;
  margin: 1rem 0rem;
  font-family: "Open Sans", sans-serif;

  :hover {
    background-color: #202124;
    /* color: #ff5d18; */
    cursor: pointer;
  }
`;

const Icon = styled.div``;

const Button = styled.button`
  background: none;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 0.75rem;
  border: 0rem;
`;
