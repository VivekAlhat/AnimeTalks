import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectRoom } from "../features/appSlice";
import { useCollection } from "react-firebase-hooks/firestore";

const Chat = () => {
  const chatRef = useRef(null);
  const roomId = useSelector(selectRoom);
  const [messages, loading] = useCollection(
    roomId &&
      db
        .collection("channels")
        .doc(roomId)
        .collection("chats")
        .orderBy("timestamp", "asc")
  );

  useEffect(() => {
    chatRef.current.scrollIntoView({ behavior: "smooth" });
  }, [roomId, loading]);

  return (
    <MessagesContainer>
      {messages?.docs.map((doc) => {
        const { message, timestamp, user, userImg } = doc.data();
        return (
          <Message>
            <img src={userImg} alt={user} />
            <MessageInfo>
              <h4>
                {user}
                {""}
                <span>
                  {new Date(timestamp?.toDate()).toUTCString().substr(0, 25)}
                </span>
              </h4>
              <p>{message}</p>
            </MessageInfo>
          </Message>
        );
      })}
      <ChatBottom ref={chatRef} />
    </MessagesContainer>
  );
};

export default Chat;

// Styled Components

const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  flex: 0.9;
  width: 100%;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

const ChatBottom = styled.div`
  padding: 10px;
`;

const Message = styled.div`
  display: flex;

  > img {
    height: 50px;
    border-radius: 50%;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
    font-weight: 700;
    font-size: 1rem;
  }

  > h4 > span {
    color: gray;
    font-size: 12px;
    font-weight: 300;
    margin-left: 5px;
  }
`;
