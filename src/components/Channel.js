import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

const Channel = ({ img, name, id }) => {
  const dispatch = useDispatch();

  const selectChannel = () => {
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };

  return (
    <ChannelInfo onClick={selectChannel}>
      <img src={img} alt="channel-avatar" />
      <p>{name}</p>
    </ChannelInfo>
  );
};

export default Channel;

// Styled Components

const ChannelInfo = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.7rem 1.5rem;
  align-items: center;

  > img {
    border-radius: 25%;
    height: 40px;
    margin-right: 15px;
  }

  > p {
    margin-top: 10px;
  }

  :hover {
    background-color: #a685e2;
  }
`;
