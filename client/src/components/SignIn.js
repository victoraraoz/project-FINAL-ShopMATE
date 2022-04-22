import styled from "styled-components";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import { useState } from "react";
import { AiFillUnlock } from "react-icons/ai";
import { AiTwotoneMail } from "react-icons/ai";
import { useHistory } from "react-router-dom";
// import bg from "../assets/bgmain.mp4";

export const SignIn = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({});
  const { user, setUser } = useContext(AppContext);

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  const handleSignIn = () => {
    fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.status === 201) {
          setUser(data.data);
          history.push("/lists");
        } else {
          console.log("Error");
        }
      })
      .catch((err) => console.log(err.stack));
  };

  return (
    <>
      {/* <video
        autoPlay="autoPlay"
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={bg} type="video/mp4" />
      </video> */}
      <Wrap>
        <Form>
          <FormBody>
            <Title>Sign In</Title>
            <Error>Invalid username or password</Error>
            <Divider />

            <InputSection>
              <AiTwotoneMail />
              <Input
                name="email"
                type="email"
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
                name="password"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  updateData("password", e.target.value);
                }}
              />
            </InputSection>

            <SignInButton onClick={handleSignIn}>
              {/* formData={formData} handleClick={handleClick}  || onClick={() => handleClick()} ...inside the Button tag?  */}
              SIGN IN
            </SignInButton>
          </FormBody>

          <ForgotPsswd onClick={() => history.push("/resetpsswd")}>
            Forgot Password
          </ForgotPsswd>

          <SignUp>
            Need an account?
            <SignUpBtn onClick={() => history.push("/signup")}>
              Sign Up!
            </SignUpBtn>
          </SignUp>
        </Form>
      </Wrap>
    </>
  );
};

const Error = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  background-color: lightpink;
  width: 100%;
  height: 2rem;
  border: 0px;
  border-radius: 1rem;
  color: red;
  font-size: 0.5rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  color: gray;
  background: none;
  padding: 2rem;
  border: 0;
  border-radius: 2rem;
  box-shadow: 0rem 1rem 3rem -0.25rem black;
  width: 20rem;
  background-color: black;
  /* opacity: 0.4; */
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background: none;
  width: 12.75rem;
  height: 2rem;
  padding-left: 1rem;
  margin-left: 1rem;
  border: 0px;
  border-radius: 1rem;
  color: gray;

  ::placeholder {
    color: gray;
    opacity: 0.6;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 0.25rem 0rem 0.25rem 0rem;
`;

const SignInButton = styled.button`
  background: none;
  width: 100%;
  height: 2.5rem;
  border: 1px solid gray;
  border-radius: 2rem;
  color: white;
  margin: 1rem 0rem;
  font-family: "Open Sans", sans-serif;
  font-size: 1rem;

  :hover {
    background-color: #373a42;
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
  color: whitesmoke;
  opacity: 1;
  :hover {
    cursor: pointer;
    color: #ff5d18;
  }
`;

const SignUp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  font-size: 0.75rem;
  color: whitesmoke;
  /* font-size: 3rem; */
  /* background-color: red; */
`;

const SignUpBtn = styled.button`
  background: none;
  border: 0px;
  color: whitesmoke;
  font-size: 0.75rem;
  font-family: "Open Sans", sans-serif;

  :hover {
    color: #ff5d18;
    cursor: pointer;
  }
`;
