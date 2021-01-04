import React, { useContext } from "react";
import ChatMessage from "./ChatMessage";
import styled from "styled-components";
import axios from "axios";
import RoomContext from "../context/RoomContext";
const MessagesContainer = styled.div`
  overflow: auto;
  margin-bottom: 2px;
`;
const MessageRoom = styled.div`
  display: flex;
  background-color: #2c2f33;
  flex-direction: column;
  position: relative
  overflow-y: scroll;
  height: 100vh;
  width: 90vw;
  @media (max-width: 768px) {
    width: 100vw;
    height: 90vh;
  }
`;
const Input = styled.input`
  margin-top: auto;
  margin-bottom: 10px;
  background-color: #40444b;
  border: 0;
  min-height: 30px;
  padding-left: 10px;
  color: #dcddde;
  align-self: center;
  width: 95%;
  &::placeholder {
    color: #72767d;
  }
`;
const Messages = (props) => {
  const onKeyDown = async (e) => {
    // If not enter, return
    if (e.keyCode !== 13) return;
    let value = e.currentTarget.value;
    // Post the message
    await axios.post("http://localhost:2345/send-message", {
      room: props.room,
      name: props.name,
      message: value,
    });
    // Change value back to an empty string.
    e.target.value = "";
  };
  const [room, setRoom] = useContext(RoomContext);
  return (
    <MessageRoom>
      <h1>
        Welcome {props.name} to Chatroom {room}
      </h1>
      <MessagesContainer>
        {props?.messages?.map((data, index) => {
          return (
            <ChatMessage name={data.name} message={data.message}></ChatMessage>
          );
        })}
      </MessagesContainer>
      <Input
        type="text"
        placeholder="message"
        onKeyDown={async (e) => {
          await onKeyDown(e);
        }}
      ></Input>
    </MessageRoom>
  );
};
export default Messages;
