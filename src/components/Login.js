import React from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import { auth, provider } from "../firebase/firebase";

const Login = () => {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <LoginContainer>
      <LoginBox>
        <h1>Animetalks.</h1>
        <p>Be a part of the biggest anime community!</p>
        <Button color="primary" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginBox>
      <LoginLogo>
        <img src="/images/art.svg" alt="login-art" />
      </LoginLogo>
    </LoginContainer>
  );
};

export default Login;

// Styled Components

const LoginContainer = styled.div`
  background-color: #edeef7;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  line-height: 1rem !important;

  > h1 {
    font-size: 3rem;
    font-weight: 700;
  }
`;

const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    height: 60%;
  }
`;
