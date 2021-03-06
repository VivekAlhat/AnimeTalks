import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { CardDeck } from "react-bootstrap";
import { db } from "../firebase/firebase";
import RoomInfo from "./RoomInfo";

const Rooms = () => {
  const [rooms] = useCollection(db.collection("rooms"));

  return (
    <CardDeck>
      {rooms?.docs.map((doc) => (
        <RoomInfo
          key={doc.id}
          id={doc.id}
          name={doc.data().name}
          img={doc.data().img}
        />
      ))}
    </CardDeck>
  );
};

export default Rooms;
