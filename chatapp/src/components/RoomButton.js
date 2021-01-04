import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  border-radius: 100%;
  margin-top: 10px;
  @media (max-width: 768px) {
    width: 8vh;
    height: 8vh;
  }
`;

const RoomButton = (props) => {
  return (
    <div onClick={() => props.onClick(props.roomNumber)}>
      <Image src={props.source}></Image>
    </div>
  );
};
export default RoomButton;
