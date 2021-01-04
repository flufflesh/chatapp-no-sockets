import React, { useContext } from "react";
import RoomButton from "./RoomButton";
import styled from "styled-components";
import honorary from "./images/honorary.png";
import level from "./images/level.png";
import RoomContext from "../context/RoomContext";
const RoomsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #23272a;
  height: 100vh;
  width: 10vw;
  @media (max-width: 768px) {
    flex-direction: row;
    height: 10vh;
    width: 100vw;
  }
`;

const Rooms = (props) => {
  // When clicking the room, change room to roomNumber
  const onClicked = (roomNumber) => {
    props.changeRoom(roomNumber);
  };
  return (
    <RoomsContainer>
      <RoomButton
        source={honorary}
        onClick={onClicked}
        roomNumber="1"
      ></RoomButton>
      <RoomButton
        source={level}
        onClick={onClicked}
        roomNumber="2"
      ></RoomButton>
    </RoomsContainer>
  );
};
export default Rooms;
