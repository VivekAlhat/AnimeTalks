import React from "react";
import { auth } from "../firebase/firebase";
import styled from "styled-components";
import Rooms from "./Rooms";

const Dashboard = (props) => {
  return (
    <DashboardContainer>
      <h4>
        Welcome <span>{props.displayName}!</span>
      </h4>
      <p
        onClick={() => {
          auth.signOut();
        }}
      >
        [ Sign Out ]
      </p>
      <React.Fragment>
        <Rooms />
      </React.Fragment>
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  height: 100vh;
  padding: 50px;
  span {
    font-weight: 700;
  }

  > p {
    cursor: pointer;
    width: fit-content;

    :hover {
      color: #7868e6;
    }
  }

  @media only screen and (max-width: 600px) {
    padding: 25px !important;
  }
`;
