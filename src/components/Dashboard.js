import React from "react";
import { Button } from "@material-ui/core";
import { auth } from "../firebase/firebase";
import styled from "styled-components";

const Dashboard = (props) => {
  return (
    <DashboardContainer>
      <h1>Hello {props.displayName}!</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign Out
      </Button>
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > Button {
    text-transform: capitalize;
  }
`;
