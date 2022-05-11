import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";

export const SignIn = () => {
  const { user, setUser } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const history = useHistory();

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log(formData);

    const reqOps = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    // console.log(reqOps);

    fetch("/signin", reqOps)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.status == 201) {
          console.log(data.data);
          setUser(data.data);
          localStorage.setItem("user", JSON.stringify(data.data));
          history.push("/lists");
        } else {
          window.alert(
            "Something went wrong. Either account found with that email address or possible missing information. Try again"
          );
        }
      })
      .catch((err) => {
        console.log(err.stack);
      });
  };

  const pswdValidator = (password) => {
    let re = {
      capital: /[A-Z]/,
      digit: /[0-9]/,
      full: /^[A-Za-z0-9@#%_/ /^/*/$/./-]{7,13}$/,
    };
    return (
      re.capital.test(password) &&
      re.digit.test(password) &&
      re.full.test(password)
    );
  };

  return (
    <Wrap>
      <Form
        onSubmit={(e) => {
          if (!formData.email && !formData.password) {
            window.alert("All fields must be filled");
          } else if (!formData.email) {
            window.alert("Please enter an email");
          } else if (!formData.password) {
            window.alert("Please fill in the password!!");
          } else {
            handleSignIn(e);
          }
          console.log(formData);
        }}
      >
        <Title>Sign In</Title>

        <Divider />

        <InputSection>
          <AiTwotoneMail />
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="Email"
            placeholder="Email"
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
            autoComplete="Password"
            placeholder="Password"
            onChange={(e) => {
              updateData("password", e.target.value);
            }}
          />
        </InputSection>

        <BTN_signin>SIGN IN</BTN_signin>

        <Error>Invalid username or password</Error>
      </Form>
      <ForgotPsswd onClick={() => history.push("/resetpsswd")}>
        Forgot Password
      </ForgotPsswd>

      <SignUp>
        Get an account!
        <SignUpBtn onClick={() => history.push("/signup")}>Sign Up!</SignUpBtn>
      </SignUp>

      <LoginFirst>Loging first!</LoginFirst>
    </Wrap>
  );
};

const LoginFirst = styled.div`
  display: none;
  flex-direction: column;
  justify-self: center;
  align-items: flex-end;
  padding-bottom: 1rem;
  font-size: 0.75rem;
`;

const Error = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  width: 100%;
  height: 2rem;
  border: 0px;
  border-radius: 1rem;
  color: black;
  font-size: 0.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 0rem 0rem 1.5rem 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  color: gray;
  background: none;
  /* padding: 1rem; */
  width: 85%;
  /* background-color: brown; */
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  font-size: 2rem;
  font-weight: 300;
  color: whitesmoke;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* background-color: blanchedalmond; */
`;

const Input = styled.input`
  /* background: #28292c; */
  width: 100%;
  height: 2.25rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 0px;
  border-radius: 1rem;
  color: gray;

  ::placeholder {
    color: gray;
    opacity: 0.6;
  }
  :focus {
    /* border: 0px solid gray; */
    outline: 0px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1rem;
`;

const BTN_signin = styled.button`
  background: #0f0f0f;
  margin: 1rem 0rem;
  width: 100%;
  height: 2.5rem;
  border: 0rem;
  border-radius: 2rem;
  color: gray;
  font-family: "Open Sans", sans-serif;
  font-size: 0.85rem;
  font-weight: 700;

  :hover {
    background-color: #1f1f1f;
    color: whitesmoke;
    cursor: pointer;
  }
`;

const ForgotPsswd = styled.button`
  background: none;
  border: 0rem;
  padding: 0.5rem 0rem;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: gray;
  opacity: 1;
  :hover {
    cursor: pointer;
    color: whitesmoke;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: gray;
  /* font-size: 3rem; */
  /* background-color: red; */
`;

const SignUpBtn = styled.button`
  background: none;
  border: 0px;
  color: gray;
  font-size: 0.75rem;
  font-family: "Open Sans", sans-serif;

  :hover {
    color: whitesmoke;
    cursor: pointer;
  }
`;
