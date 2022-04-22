import styled from "styled-components";
import { AppContext } from "../AppContext";
import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { setUser } from "react";

export const Profile = () => {
  const { user } = useContext(AppContext);
  const [formData, setFormData] = useState({});
  const history = useHistory();

  if (!user) {
    history.push("/");
  }

  const SignOut = (e) => {
    if (e.target.value === "signout") {
      setUser(null);
      history.push("/");
    }
  };

  const handleSave = () => {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        history.push("/confirmation");
        setUser(data.data);
      })
      .catch((err) => console.log(err.stack));
  };

  return (
    <Wrap>
      <SubHeader>
        <Title>PROFILE</Title>
        <SignOutBtn onClick={SignOut}> SIGN OUT </SignOutBtn>
      </SubHeader>

      <Username>
        <AccentRed />
        <SpacerClear />
        {data.email}
      </Username>

      <FormHeader>
        <EditProfile>EDIT PROFILE</EditProfile>
        <Save>SAVE CHANGES</Save>
      </FormHeader>
      <Divider />
      <Message>
        Update username/email and enter your password. To modify your password,
        enter it twice.
      </Message>

      <Form onSubmit={handleSave}>
        <Label>Username</Label>
        <Input name="username" type="text" />

        <Label>Email</Label>
        <Input name="email" type="email" />

        <Label>Password</Label>
        <Input />

        <Label>Confirm Password</Label>
        <Input />
      </Form>
      <PgTab />
    </Wrap>
  );
};

const FormHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  /* background-color: aliceblue; */
`;

const PgTab = styled.div`
  width: 7.5rem;
  height: 0.188rem;
  background-color: #ff130c;
`;

const Message = styled.div`
  /* display: flex;
  justify-content: center;
  align-items: center; */
  color: #ff4a45;
  width: 100%;
  padding: 0rem 2rem;
  font-size: 0.75rem;
  line-height: 1rem;
`;

const AccentRed = styled.div`
  background-color: #ff130c;
  height: 100%;
  width: 3px;
`;

const SpacerClear = styled.div`
  background: none;
  height: 100%;
  width: 1rem;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #1a1a1a;
  width: 100%;
  height: 100%;
`;

const SubHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.5rem;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  background-color: #ff130c;
  padding: 0rem 1rem;
`;

const Title = styled.div``;

const SignOutBtn = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-weight: 400;

  :hover {
    cursor: pointer;
    color: yellow;
    background-color: #ff4a45;
  }
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
  align-items: center;
  color: #ff130c;
  font-size: 1rem;
  font-weight: 600;
`;

const Divider = styled.div`
  background-color: #ff130c;
  width: 100%;
  height: 1px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Label = styled.div`
  align-self: flex-start;
  color: white;
  padding: 0.8rem 0rem 0.8rem 1.5rem;
`;

const Input = styled.input`
  background-color: #0f0f0f;
  border: 0rem;
  width: 80%;
  height: 2.5rem;
  padding-left: 1rem;
  color: gray;
  font-size: 1rem;
`;

const Save = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.5rem;
  height: 1.875rem;
  color: white;
  font-weight: 600;
  background: none;
  border: 0rem;

  :hover {
    cursor: pointer;
    background-color: #ff130c;
  }
`;
