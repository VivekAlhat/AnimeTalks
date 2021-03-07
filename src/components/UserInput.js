import { Button } from "react-bootstrap";
import React, { useRef } from "react";
import styled from "styled-components";
import { db, auth } from "../firebase/firebase";
import { useSelector } from "react-redux";
import { selectRoom } from "../features/appSlice";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase";

const UserInput = () => {
  const inputRef = useRef(null);
  const [user] = useAuthState(auth);
  const roomId = useSelector(selectRoom);
  const [roomDetails] = useDocument(
    roomId && db.collection("channels").doc(roomId)
  );

  const sendMessage = (e) => {
    e.preventDefault();
    if (!roomId) {
      return false;
    }

    db.collection("channels").doc(roomId).collection("chats").add({
      message: inputRef.current.value,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: user?.displayName,
      userImg: user?.photoURL,
    });

    inputRef.current.value = "";
  };

  return (
    <InputContainer>
      <form>
        <input
          ref={inputRef}
          placeholder={`Message #${roomDetails?.data().name}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </InputContainer>
  );
};

export default UserInput;

// Styled Components

const InputContainer = styled.div`
  > form {
    text-align: center;
  }

  > form > input {
    width: 1000px;
    padding: 10px;
    outline: none;
  }

  > form > button {
    display: none;
  }
`;
