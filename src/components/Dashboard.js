import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Dashboard = (props) => {
  return (
    <DashboardContainer>
      <Sidebar />
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
`;
