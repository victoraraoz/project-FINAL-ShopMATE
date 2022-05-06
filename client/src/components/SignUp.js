import styled from "styled-components";
import { BiUser } from "react-icons/bi";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
// import bg from "../assets/bg_signin.jpg";

export const SignUp = () => {
  const history = useHistory();
  const { user, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({});

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == 201) {
          setUser(data.data);
          localStorage.setItem("user", JSON.stringify(data.data));
          history.push("/thankyou");
        } else {
          window.alert("ALERT");
        }
      })
      .catch((err) => console.log(err.stack));
  };

  const pswCheck = (password) => {
    let filter = {
      capital: /[A-Z]/,
      digit: /[0-9]/,
      special: /[!@#$%^&*_/-/+=]/,
      full: /^[A-Za-z0-9!@#/$%/^&/*/./-/+]{8,16}$/,
    };
    return (
      filter.capital.test(password) &&
      filter.digit.test(password) &&
      filter.full.test(password)
    );
  };

  return (
    <SignUpWrap>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            !formData.username &&
            !formData.email &&
            !formData.password &&
            !formData.confirmpassword
          ) {
            window.alert("No input detected!");
          } else if (!formData.username) {
            window.alert("We need a username");
          } else if (formData.username.length < 4) {
            window.alert("Username must be at least 4 characters!");
          } else if (!formData.email) {
            window.alert("Please fill in email");
          } else if (!formData.password) {
            window.alert("FILL IN THE PASSWORD!!!");
          } else if (!formData.confirmpassword) {
            window.alert("Please fill in the password a second time");
          } else if (formData.password !== formData.confirmpassword) {
            window.alert("Passwords must match");
          } else if (!pswCheck(formData.password)) {
            window.alert(
              "Passwords must be between 8 and 16 characters and contain a capital letter, a numer and a special character e.g."
            );
          } else {
            handleSignUp(e);
          }
        }}
      >
        <Title>Sign Up</Title>

        <InputSection>
          <BiUser />
          <Input
            name="username"
            type="text"
            autoCapitalize="Username"
            placeholder="elonboy"
            onChange={(e) => {
              updateData("username", e.target.value);
            }}
          />
        </InputSection>
        <Divider />
        <InputSection>
          <AiTwotoneMail />
          <Input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="elon@me.com"
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
            placeholder="Password"
            autoComplete="Psw"
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
            autoComplete="Confirm"
            onChange={(e) => {
              updateData("confirmPassword", e.target.value);
            }}
          />
        </InputSection>

        <SignUpBtn type="submit">SIGN UP</SignUpBtn>

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
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 2.25rem;
  font-size: 2rem;
  font-weight: 300;
  color: whitesmoke;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
`;

const Input = styled.input`
  background-color: #28292c;
  width: 15rem;
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
    color: gray;
    opacity: 0.5;
  }
  :focus {
    border: 0px solid gray;
    outline: 0px;
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
  font-size: 0.85rem;
  font-weight: 800;

  :hover {
    background-color: #ff130c;
    color: white;
    cursor: pointer;
  }
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
