import styled from "styled-components";

export const Footer = () => {
  return (
    <FootWrap>
      <Copyright>© 2022 Bits Inc. All Rights Reserved</Copyright>
      <FootNav>
        <Button>Terms</Button>
        <Button>Privacy</Button>
        <Button>About</Button>
      </FootNav>
    </FootWrap>
  );
};

const FootWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 3rem;
  background-color: #172035;
  margin: 0 auto;
  font-family: sans-serif;
  font-size: 0.75em;
  color: gray;
`;

const Copyright = styled.div`
  margin-right: 50px;
`;

const FootNav = styled.div`
  /* padding-right: 50px; */
`;

const Button = styled.button`
  padding: 0 25px 0 25px;
  font-family: sans-serif;
  font-size: 1em;
  color: gray;
  background: none;
  border: 0;
  height: 25px;

  :hover {
    color: #92e000;
    cursor: pointer;
    background-color: #101010;
    height: 3rem;
  }
`;
