import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";
import { useContext, useState } from "react";
// import bg from "../assets/bg_signin.jpg";

export const SignUp = () => {
  const history = useHistory();
  const { user, username, email, password, setStatus, setUser } =
    useContext(AppContext);
  const [formData, setFormData] = useState({});

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const Alert = (e) => {
    if (e.target.value !== 0) {
      return window.alert("Please fill in the form");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    console.log(requestOptions);

    fetch("/signup", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "Success") {
          history.push("/lists");
          setUser(data.data);
        }
      })
      .catch((err) => console.log(err.stack));
  };

  return (
    <SignUpWrap>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormBody>
          <Title>Sign Up</Title>
          <InputSection>
            <BiUser />
            <Input
              id="username"
              name="username"
              type="username"
              placeholder="Username"
              onChange={(e) => {
                updateData("username", e.target.value);
              }}
            />
          </InputSection>
          <Divider />
          <InputSection>
            <AiTwotoneMail />
            <Input
              id="email"
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
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={(e) => {
                updateData("password", e.target.value);
              }}
            />
          </InputSection>
          <Divider />
          <InputSection>
            <AiFillUnlock />
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                updateData("confirmPassword", e.target.value);
              }}
            />
          </InputSection>

          <SignUpBtn type="submit">SIGN UP</SignUpBtn>
        </FormBody>
        {""}
        <Footer>
          Already a member?{" "}
          <SignInBtn onClick={() => history.push("/")}>Sign In!</SignInBtn>
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
  width: 100%;
  height: 100vh;
  background-color: black;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  width: 20rem;
  width: 90%;
  border-radius: 1rem;
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

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.25rem;
  font-size: 2rem;
  font-weight: 300;
  color: whitesmoke;
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
  background-color: #28292c;
  width: 12.5rem;
  height: 2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 0px solid white;
  border-radius: 1rem;
  color: darkgray;
  font-family: "Open Sans", sans-serif;
  :hover {
    /* border: 1px solid #ff130c; */
  }

  ::placeholder {
    color: lightgray;
    opacity: 0.5;
  }
  :focus {
    border: 1px solid #28292c;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  /* background-color: lightgray; */
  margin: 0.25rem 0rem 0.25rem 0rem;
`;

const SignUpBtn = styled.button`
  background-color: #0f0f0f;
  margin: 1rem 0rem;
  width: 100%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: gray;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;

  :hover {
    background-color: #ff130c;
    color: white;
    cursor: pointer;
  }
`;

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
  color: gray;
`;

const SignInBtn = styled.button`
  background: none;
  border: 0rem;
  font-family: "Open Sans", sans-serif;
  color: gray;
  :hover {
    color: whitesmoke;
    cursor: pointer;
  }
`;
