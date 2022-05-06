import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

export const ThankYou = () => {
  // const { user } = localStorage.getItem("user");
  const history = useHistory();

  // setTimeout(() => {
  //   history.push("/");
  // }, 5000);

  // const Timer = () => {
  //   const {initialSeconds = 5} = props;
  //   const [seconds, setSeconds ] =  useState(initialSeconds);

  //   useEffect(()=>{
  //   let myInterval = setInterval(() => {
  //           if (seconds > 0) {
  //               setSeconds(seconds - 1);
  //           }
  //                     if (seconds === 0) {
  //                   clearInterval(myInterval)
  //               } else {
  //                   setSeconds(5);
  //               }
  //           }
  //       }, 1000)
  //       return ()=> {
  //           clearInterval(myInterval);
  //         };
  //   });

  return (
    <Wrap>
      <AiFillCheckCircle size="3rem" color="green" />
      <Spacer />
      <div> Success!</div> <p>Thanks for registering!</p> You're being
      redirected to the sign-in page, in 2 seconds!
    </Wrap>
  );
};

const Spacer = styled.div`
  height: 1rem;
`;

const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0% auto;
  height: 100%;
  width: 75%;
  padding-bottom: 8rem;
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
  color: white;
  background: none;

  div {
    font-size: 3.5rem;
    /* font-weight: 700; */
    text-align: center;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
