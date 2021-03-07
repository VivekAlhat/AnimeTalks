import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { db, auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Channel from "./Channel";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(
    db.collection("channels").orderBy("rank", "asc")
  );

  return (
    <SidebarContainer>
      <UserInfo>
        <img
          src={user?.photoURL}
          alt="user-avatar"
          onClick={() => {
            auth.signOut();
          }}
        />
        <UserDetails>
          <h3>{user?.displayName}</h3>
          <p>
            online <FiberManualRecordIcon />
          </p>
        </UserDetails>
      </UserInfo>

      <ChannelsContainer>
        <h3># Conversations</h3>
        <Channels>
          {channels?.docs.map((doc) => (
            <Channel
              key={doc.id}
              id={doc.id}
              name={doc.data().name}
              img={doc.data().img}
            />
          ))}
        </Channels>
      </ChannelsContainer>
    </SidebarContainer>
  );
};

export default Sidebar;

// Styled Components

const SidebarContainer = styled.div`
  background-color: #845ec2;
  color: #edeef7;
  display: flex;
  flex-direction: column;
  flex: 0.2;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.5rem;
  > img {
    height: 70px;
    border-radius: 50%;
    margin-right: 15px;
    margin-top: 5px;

    :hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
`;

const UserDetails = styled.div`
  margin-top: 10px;
  line-height: 0.3rem;

  > h3 {
    font-size: 1.3rem;
    font-weight: 700;
  }

  > p {
    font-size: 1rem;
  }

  > p > .MuiSvgIcon-root {
    font-size: 15px;
    color: #54e346;
  }
`;

const ChannelsContainer = styled.div`
  > h3 {
    padding: 1rem 1.5rem 0rem;
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const Channels = styled.div``;
