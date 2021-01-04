import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import Rooms from "../components/Rooms";
import Messages from "../components/Messages";
import styled from "styled-components";
import NameContext from "../context/NameContext";
import RoomContext from "../context/RoomContext";
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
  const roomRef = useRef(room);
  roomRef.current = room;
  const timerToClear = useRef(null);
  async function getMessage() {
    const currentRoom = roomRef.current;
    let messages = await axios.get(
      "http://localhost:1234/get-chat/" + currentRoom
    );
    console.log(currentRoom);
    setMessages(messages.data);
    timerToClear.current = setTimeout(getMessage, 1000);
  }

  useEffect(() => {
    getMessage();
    return clearInterval(timerToClear.current);
  }, [room]);

  return (
    <ChatContainer>
      <Rooms changeRoom={setRoom} />
      <Messages name={name} messages={messages} room={room} />
    </ChatContainer>
  );
};
export default Chat;
