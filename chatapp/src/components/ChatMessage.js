import React from "react";
import placeholder from "./images/placeholder.png";
import styled from "styled-components";

const ChatMessageContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: flex-start;
  height: 50px;
  margin-top: 13px;
`;

const UserImage = styled.img`
  margin-left: 15px;
  display: inline;
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
const UserMessage = styled.p`
  display: inline;
  color: #dcddde;
  margin: 0;
  margin-top: 5px;
`;
const UserName = styled.h4`
  color: white;
  margin: 0;
`;
const NameAndMessage = styled.div`
  display: flex;
  margin-left: 15px;
  flex-direction: column;
  height: 50px;
`;
const ChatMessage = (props) => {
  return (
    <ChatMessageContainer>
      <UserImage src={placeholder}></UserImage>
      <NameAndMessage>
        <UserName>{props.name}</UserName>
        <UserMessage>{props.message}</UserMessage>
      </NameAndMessage>
    </ChatMessageContainer>
  );
};
export default ChatMessage;
