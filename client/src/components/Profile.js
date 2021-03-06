import styled from "styled-components";
import { AppContext } from "../AppContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const Profile = () => {
  const {
    status,
    setStatus,
    user,
    setUser,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AppContext);

  const [formData, setFormData] = useState({
    username: user.username,
    email: user.email,
  });
  const [inputValue, setInputValue] = useState("");
  const history = useHistory();

  const updateData = (inputField, inputValue) => {
    setFormData({ ...formData, [inputField]: inputValue });
  };

  if (!user) {
    history.push("/");
  }

  const updateUser = (e) => {
    e.preventDefault();
    fetch("/updateuser", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        let update = { ...user };
        update.username = data.data.username;
        update.email = data.data.email;
        setUser(update);
      })
      .catch((err) => console.log(err.stack));
  };

  const SignOut = () => {
    setUser(null);
    localStorage.clear();
    history.push("/");
  };

  return (
    <Wrap>
      <Header>
        <Title>Profile</Title>
        <SignOutBtn onClick={SignOut}> SIGN OUT </SignOutBtn>
      </Header>

      <Form onSubmit={updateUser}>
        <Username>
          <Spacer />
          {user?.username}
        </Username>
        <FormHeader>
          <EditProfile>Update info.</EditProfile>
        </FormHeader>

        <Message>Ignore password fiels if not to be modified.</Message>
        <Divider />
        <Label>Username</Label>
        <Input
          // value={inputValue}
          name="username"
          id="username"
          type="text"
          placeholder={user?.username}
          autoComplete="Username"
          onChange={(e) => {
            updateData("username", e.target.value);
          }}
        />

        <Label>Email</Label>
        <Input
          // value={inputValue}
          name="email"
          id="email"
          type="email"
          placeholder={user.email}
          onChange={(e) => {
            updateData("email", e.target.value);
          }}
        />

        {/* <Label>Password</Label> */}
        <Input
          // value={inputValue}
          name="password"
          id="password"
          type="password"
          autoComplete="Password"
          placeholder={user.password}
          onChange={(e) => {
            updateData("password", e.target.value);
          }}
        />

        {/* <Label>Confirm Password</Label> */}
        <Input
          // value={inputValue}
          name="confirmpwd"
          id="confirmpwd"
          type="password"
          autoComplete="confirm password"
          placeholder="Comfirm password"
          onChange={(e) => {
            updateData("confirmpwd", e.target.value);
          }}
        />
        <Save type="submit">SAVE CHANGES</Save>
      </Form>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid #ff130c;
  background: none;
  width: 100%;
  height: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 3rem;
  color: white;
  font-size: 3rem;
  font-weight: 600;
  background-color: #ff130c;
  padding: 0rem 1rem;
`;

const Username = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  height: 3.25rem;
  font-weight: 600;
  color: white;
  background-color: #0f0f0f;
`;

const EditProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff130c;
  font-size: 1rem;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: none;
`;

const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3rem;
  padding-left: 2rem;
  text-transform: uppercase;
  background: none;
`;

const Divider = styled.div`
  width: 100%;
  height: 1rem;
`;

const Message = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #ff4a45;
  width: 100%;
  padding: 0rem 2rem;
  font-size: 0.8rem;
  line-height: 1rem;
`;

const Spacer = styled.div`
  background: none;
  height: 100%;
  width: 1rem;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
`;

const SignOutBtn = styled.button`
  /* display: flex; */
  /* padding: 0.45rem; */
  /* align-items: center; */
  border: none;
  height: 100%;
  width: 6rem;
  font-size: 0.75rem;
  color: black;
  background: none;

  :hover {
    cursor: pointer;
    color: white;
    background-color: #d7130c;
  }
`;

const Label = styled.div`
  align-self: flex-start;
  font-size: 0.5rem;
  padding-left: 2rem;
  margin-top: 0.5rem;
  color: gray;
`;

const Input = styled.input`
  background-color: #0f0f0f;
  border: 0rem;
  border-radius: 0.5rem;
  width: 80%;
  height: 2.5rem;
  padding-left: 1rem;
  margin: 0.5rem 0rem;
  color: gray;
  font-size: 1rem;
`;

const Save = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 1.875rem;
  margin: 0.5rem;
  color: white;
  font-weight: 600;
  background: none;
  border: 0rem;

  :hover {
    cursor: pointer;
    background-color: #ff130c;
  }
`;
