import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Rooms from "../components/Rooms";
import Messages from "../components/Messages";
import styled from "styled-components";
import NameContext from "../context/NameContext";
import RoomContext from "../context/RoomContext";
import { Redirect } from "react-router-dom";

const ChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Chat = () => {
  const [messages, setMessages] = useState();
  const [name, setName] = useContext(NameContext);
  const [room, setRoom] = useContext(RoomContext);
  // Ref for current room, otherwise won't update room.
  const roomRef = useRef(room);
  roomRef.current = room;
  // Ref for clearing timer
  const timerToClear = useRef(null);

  async function getMessage() {
    const currentRoom = roomRef.current;
    let messages = await axios.get(
      "http://localhost:2345/get-chat/" + currentRoom
    );
    setMessages(messages.data);
    timerToClear.current = setTimeout(getMessage, 1000);
  }

  useEffect(() => {
    if (!name) {
      return;
    }
    getMessage();
    return clearInterval(timerToClear.current);
  }, [room]);
  if (!name) {
    return <Redirect to="/" />;
  }
  return (
    <ChatContainer>
      <Rooms changeRoom={setRoom} />
      <Messages name={name} messages={messages} room={room} />
    </ChatContainer>
  );
};
export default Chat;
