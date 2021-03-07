import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import UserInput from "./UserInput";
import Chat from "./Chat";

const Dashboard = (props) => {
  return (
    <DashboardContainer>
      <Sidebar />
      <ChatContainer>
        <Chat />
        <UserInput />
      </ChatContainer>
    </DashboardContainer>
  );
};

export default Dashboard;

// Styled Components

const DashboardContainer = styled.div`
  height: 100vh;
  display: flex;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0.8;
  padding: 1rem 1.3rem;
`;
