import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const RoomInfo = (props) => {
  const dispatch = useDispatch();
  const selectChannel = () => {
    if (props.id) {
      dispatch(enterRoom({ roomId: props.id }));
    }
  };

  return (
    <Card onClick={selectChannel} style={{ cursor: "pointer" }}>
      <Card.Img style={{ height: "270px" }} src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default RoomInfo;
